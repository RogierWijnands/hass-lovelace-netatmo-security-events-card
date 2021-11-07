// Packages
import { addSeconds, isAfter } from 'date-fns';

// Types
import { CardConfig } from '../types/card-config.type';
import { AuthData } from '../types/auth-data.type';
import { StorageData } from '../types/storage-data.type';

// Enum
import { GrantType } from '../enum/auth.enum';

// Config
import { APP_CONFIG } from '../config/app.config';

// Helpers
import { getStorageData, setStorageData } from '../helpers/storage.helper';
import { toSearchParams } from '../helpers/url-search-params.helper';

export class AuthService {
  private readonly config: CardConfig;

  constructor(config: CardConfig) {
    this.config = config;
  }

  public authenticate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (!this.config?.client_id || !this.config.client_secret) {
        return resolve(false);
      }
      const storageData: StorageData = getStorageData() || {};
      let alreadyAuthenticated: boolean = false;
      let authMethod: () => Promise<AuthData | undefined> = this.login;
      if (
        storageData.auth?.refresh_token &&
        storageData.auth.timestamp &&
        storageData.auth.expires_in
      ) {
        const authExpireDate = addSeconds(
          new Date(storageData.auth.timestamp),
          Number(storageData.auth.expires_in)
        );
        if (isAfter(new Date(), authExpireDate)) {
          authMethod = this.refreshToken;
        } else {
          alreadyAuthenticated = true;
        }
      }
      if (alreadyAuthenticated) {
        return resolve(true);
      } else {
        authMethod
          .bind(this)()
          .then((authData: AuthData | undefined) => {
            if (authData) {
              storageData.auth = { ...authData, timestamp: new Date() };
              setStorageData(storageData);
              return resolve(true);
            }
            return resolve(false);
          })
          .catch(() => resolve(false));
      }
    });
  }

  private login(): Promise<AuthData | undefined> {
    return new Promise<AuthData | undefined>((resolve) => {
      if (
        !this.config?.username ||
        !this.config.password ||
        !this.config.client_id ||
        !this.config.client_secret
      ) {
        return resolve(undefined);
      }
      fetch(`${APP_CONFIG.api.baseUrl}${APP_CONFIG.api.auth.url}`, {
        method: 'POST',
        headers: APP_CONFIG.api.auth.headers,
        body: toSearchParams({
          grant_type: GrantType.PASSWORD,
          client_id: this.config.client_id,
          client_secret: this.config.client_secret,
          username: this.config.username,
          password: this.config.password,
          scope: APP_CONFIG.api.auth.scopes.join(' '),
        }),
      })
        .then((authData) => resolve(authData.json() || undefined))
        .catch(() => resolve(undefined));
    });
  }

  private refreshToken(): Promise<AuthData | undefined> {
    return new Promise<AuthData | undefined>((resolve) => {
      const storageData = getStorageData();
      if (
        !this.config?.client_id ||
        !this.config.client_secret ||
        !storageData?.auth?.refresh_token
      ) {
        return resolve(undefined);
      }
      fetch(`${APP_CONFIG.api.baseUrl}${APP_CONFIG.api.auth.url}`, {
        method: 'POST',
        headers: APP_CONFIG.api.auth.headers,
        body: toSearchParams({
          grant_type: GrantType.REFRESH_TOKEN,
          refresh_token: storageData.auth.refresh_token,
          client_id: this.config.client_id,
          client_secret: this.config.client_secret,
        }),
      })
        .then((authData) => resolve(authData.json() || undefined))
        .catch(() => resolve(undefined));
    });
  }
}
