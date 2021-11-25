// Packages
import { LitElement, TemplateResult } from 'lit';
import { css, CSSResult, customElement } from 'lit-element';

// Config
import { APP_CONFIG } from '../../lib/config/app.config';
import { eventIconMap } from '../../lib/config/event-icons.config';

// Types
import { CardConfig } from '../../lib/types/card-config.type';
import { NetatmoHome, NetatmoHomeData } from '../../lib/types/home-data.type';
import { NetatmoEvent } from '../../lib/types/event.type';

// Template
import { EventListComponentTemplate } from './event-list.component.html';

// Services
import { HomeDataService } from '../../lib/services/home-data.service';

@customElement(APP_CONFIG.components.eventList)
export class EventListComponent extends LitElement {
  private homeDataService: HomeDataService;
  private homeData: NetatmoHomeData;
  private eventList: NetatmoEvent[];
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
      .then((homeData: NetatmoHomeData) => {
        this.homeData = homeData;
        this.eventList = EventListComponent.parseEventList(this.homeData);
        this.requestUpdate();
      })
      .catch(() => {
        this.homeData = undefined;
        this.eventList = undefined;
        this.requestUpdate();
      });
  }

  private static parseEventList(homeData: NetatmoHomeData): NetatmoEvent[] {
    const parsedEventList = [];

    // Flatten events list
    if (Array.isArray(homeData.homes)) {
      parsedEventList.push(
        ...homeData.homes.reduce(
          (eventList: NetatmoEvent[], home: NetatmoHome) => {
            if (Array.isArray(home.events)) {
              eventList.push(
                ...home.events.reduce(
                  (homeEventList: NetatmoEvent[], homeEvent: NetatmoEvent) => {
                    if (Array.isArray(homeEvent.event_list)) {
                      homeEventList.push(...homeEvent.event_list);
                    } else {
                      homeEventList.push(homeEvent);
                    }
                    return homeEventList;
                  },
                  []
                )
              );
            }
            return eventList;
          },
          []
        )
      );
    }

    // Sort events list
    parsedEventList.sort((a, b) => a - b);

    return parsedEventList;
  }

  public render(): TemplateResult {
    return EventListComponentTemplate(
      this.config,
      eventIconMap,
      this.eventList
    );
  }

  static get styles(): CSSResult {
    return css`
      .netatmo-security-event {
        width: 100%;
        display: inline-block;
      }
      .netatmo-security-event:not(:last-of-type) {
        margin-bottom: 10px;
      }
      .netatmo-security-event__icon {
        padding-right: 40px;
      }
      .netatmo-security-event__content {
        width: calc(100% - 40px);
        float: right;
      }
      .netatmo-security-event__content--secondary {
        opacity: 0.5;
      }
    `;
  }
}
