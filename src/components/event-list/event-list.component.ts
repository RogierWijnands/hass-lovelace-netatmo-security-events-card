// Packages
import { LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit-element';

// Config
import { APP_CONFIG } from '../../lib/config/app.config';

// Types
import { CardConfig } from '../../lib/types/card-config.type';

// Template
import { EventListComponentTemplate } from './event-list.component.html';

// Services
import { AuthService } from '../../lib/services/auth.service';

@customElement(APP_CONFIG.components.eventList)
export class EventListComponent extends LitElement {
  @property() public config: CardConfig;

  public render(): TemplateResult {
    new AuthService(this.config).authenticate().then((data) => {});
    return EventListComponentTemplate(this.config);
  }
}
