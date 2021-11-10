// Config
import { APP_CONFIG } from '../config/app.config';

// Types
import { CardConfig } from '../types/card-config.type';
import { HomeData } from '../types/home-data.type';
import { APIResponse } from '../types/api-response.type';

// Services
import { AuthService } from './auth.service';
import { getStorageData } from '../helpers/storage.helper';

export class HomeDataService {
  private readonly config: CardConfig;
  private readonly authService: AuthService;

  constructor(config: CardConfig) {
    this.config = config;
    this.authService = new AuthService(this.config);
  }

  public fetchData(): Promise<HomeData | undefined> {
    return new Promise((resolve) => {
      this.authService.authenticate().then((authenticated: boolean) => {
        if (authenticated) {
          fetch(`${APP_CONFIG.api.baseUrl}${APP_CONFIG.api.homeData.url}`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${getStorageData()?.auth?.access_token}`,
            },
          })
            .then((response: Response) => {
              response.json().then((parsedResponse: APIResponse<HomeData>) => {
                return resolve(parsedResponse.body);
              });
            })
            .catch(() => {
              return resolve(undefined);
            });
        } else {
          return resolve(undefined);
        }
      });
    });
  }
}
