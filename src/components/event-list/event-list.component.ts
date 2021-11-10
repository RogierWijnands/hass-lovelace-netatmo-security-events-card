// Packages
import { LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit-element';

// Config
import { APP_CONFIG } from '../../lib/config/app.config';

// Types
import { CardConfig } from '../../lib/types/card-config.type';
import { HomeData } from '../../lib/types/home-data.type';

// Template
import { EventListComponentTemplate } from './event-list.component.html';

// Services
import { HomeDataService } from '../../lib/services/home-data.service';

@customElement(APP_CONFIG.components.eventList)
export class EventListComponent extends LitElement {
  private homeDataService: HomeDataService;
  private homeData: HomeData;
  private _config: CardConfig;

  set config(config: CardConfig) {
    this.requestUpdate('config', this._config);
    const configChanged =
      JSON.stringify(config) !== JSON.stringify(this._config);
    this._config = config;
    if (configChanged) {
      this.homeDataService = this._config
        ? new HomeDataService(this._config)
        : undefined;
    }
    this.fetchData();
  }

  get config(): CardConfig {
    return this._config;
  }

  private fetchData(): void {
    this.homeDataService
      .fetchData()
      .then((homeData: HomeData) => {
        this.homeData = homeData;
        console.log(this.homeData);
      })
      .catch(() => {
        this.homeData = undefined;
      });
  }

  public render(): TemplateResult {
    return EventListComponentTemplate(this.config);
  }
}
