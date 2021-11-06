// Packages
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import {
  LitElement,
  TemplateResult,
  property,
  customElement,
} from 'lit-element';

// Config
import { CONFIG } from './lib/config/config';

// Components
import { EventListComponent } from './components/event-list/event-list.component';

@customElement(CONFIG.name)
class NetatmoSecurityEventsCard extends LitElement {
  @property() private config: Record<string, any>;
  @property() private hass: HomeAssistant;

  public static getConfigElement(): LovelaceCardEditor {
    return <LovelaceCardEditor>document.createElement(CONFIG.editorType);
  }

  public static getStubConfig(): Record<string, any> {
    return {};
  }

  public setConfig(config: Record<string, any>): void {
    this.config = config;
  }

  protected render(): TemplateResult {
    return new EventListComponent().render();
  }

  public getCardSize(): number {
    return 3;
  }
}

if (!customElements.get(CONFIG.type)) {
  customElements.define(CONFIG.type, NetatmoSecurityEventsCard);
  console.info(`${CONFIG.name} is installed!`);
}
