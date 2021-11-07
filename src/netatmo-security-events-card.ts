// Packages
import { HomeAssistant } from 'custom-card-helpers';
import { LitElement, TemplateResult } from 'lit';
import { property, customElement, state } from 'lit-element';

// Types
import { CardConfig } from './lib/types/card-config.type';

// Config
import { APP_CONFIG } from './lib/config/app.config';

// Components
import { CardEditorComponent } from './components/card-editor/card-editor.component';

// Template
import { NetatmoSecurityEventsCardTemplate } from './netatmo-security-events-card.html';

// Rollup
import './components/card-editor/card-editor.component';
import './components/event-list/event-list.component';

@customElement(APP_CONFIG.components.card)
class NetatmoSecurityEventsCard extends LitElement {
  @property() public hass: HomeAssistant;
  @state() private config: CardConfig;

  public static getConfigElement(): CardEditorComponent {
    return <CardEditorComponent>document.createElement(APP_CONFIG.editorType);
  }

  public static getStubConfig(): Partial<CardConfig> {
    return {
      name: APP_CONFIG.name,
    };
  }

  public setConfig(config: CardConfig): void {
    this.config = config;
  }

  protected render(): TemplateResult {
    return NetatmoSecurityEventsCardTemplate(this.config);
  }
}
