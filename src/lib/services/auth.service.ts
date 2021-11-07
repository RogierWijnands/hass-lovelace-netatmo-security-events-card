// Packages
import { addSeconds, isAfter } from 'date-fns';

// Types
import { CardConfig } from '../types/card-config.type';
import { AuthData } from '../types/auth-data.type';

// Enum
import { GrantType } from '../enum/auth.enum';

// Config
import { APP_CONFIG } from '../config/app.config';

// Helpers
import { getStorageData, setStorageData } from '../helpers/storage.helper';

export class AuthService {
  private readonly config: CardConfig;

  constructor(config: CardConfig) {
    this.config = config;
  }

  public async authenticate(): Promise<boolean> {
    console.log('stap 1', this.config);
    if (!this.config?.client_id || !this.config.client_secret) {
      return false;
    }
    const storageData = getStorageData();
    let authMethod: () => Promise<AuthData | undefined> = this.login;
    if (
      storageData?.auth?.refresh_token &&
      storageData.auth.timestamp &&
      storageData.auth.expires_in
    ) {
      const authExpireDate = addSeconds(
        new Date(storageData.auth.timestamp),
        Number(storageData.auth.expires_in)
      );
      if (isAfter(new Date(), authExpireDate)) {
        authMethod = this.refreshToken;
      }
    }
    console.log('stap 2', authMethod);
    authMethod()
      .then((authData: AuthData | undefined) => {
        console.log('laatste stap', authData);
        if (authData) {
          storageData.auth = { ...authData, timestamp: new Date() };
          setStorageData(storageData);
          return true;
        }
        return false;
      })
      .catch(() => false);
  }

  private async login(): Promise<AuthData | undefined> {
    console.log('stap 3a', this.config);
    if (
      !this.config?.username ||
      !this.config.password ||
      !this.config.client_id ||
      !this.config.client_secret
    ) {
      return;
    }
    console.log(
      'stap 4a',
      `${APP_CONFIG.api.baseUrl}${APP_CONFIG.api.auth.url}`
    );
    fetch(`${APP_CONFIG.api.baseUrl}${APP_CONFIG.api.auth.url}`, {
      method: 'POST',
      headers: APP_CONFIG.api.auth.headers,
      body: JSON.stringify({
        grant_type: GrantType.PASSWORD,
        client_id: this.config.client_id,
        client_secret: this.config.client_secret,
        username: this.config.username,
        password: this.config.password,
        scope: APP_CONFIG.api.auth.scopes.join(' '),
      }),
    })
      .then((authData) => authData || undefined)
      .catch(() => undefined);
  }

  private async refreshToken(): Promise<AuthData | undefined> {
    console.log('stap 3b', this.config);
    const storageData = getStorageData();
    if (
      !this.config?.client_id ||
      !this.config.client_secret ||
      !storageData?.auth?.refresh_token
    ) {
      return;
    }
    console.log(
      'stap 4b',
      `${APP_CONFIG.api.baseUrl}${APP_CONFIG.api.auth.url}`
    );
    fetch(`${APP_CONFIG.api.baseUrl}${APP_CONFIG.api.auth.url}`, {
      method: 'POST',
      headers: APP_CONFIG.api.auth.headers,
      body: JSON.stringify({
        grant_type: GrantType.REFRESH_TOKEN,
        refresh_token: storageData.auth.refresh_token,
        client_id: this.config.client_id,
        client_secret: this.config.client_secret,
      }),
    })
      .then((authData) => authData || undefined)
      .catch(() => undefined);
  }
}
