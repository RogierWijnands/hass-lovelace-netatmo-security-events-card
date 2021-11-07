// Packages
import { HomeAssistant } from 'custom-card-helpers';
import { LitElement, TemplateResult } from 'lit';
import { property, customElement, state } from 'lit-element';

// Config
import { APP_CONFIG } from './lib/config/app.config';

// Components
import { EventListComponent } from './components/event-list/event-list.component';
import { CardEditorComponent } from './components/card-editor/card-editor.component';

// Rollup
import './components/card-editor/card-editor.component';

@customElement(APP_CONFIG.components.card)
class NetatmoSecurityEventsCard extends LitElement {
  @property() public hass: HomeAssistant;
  @state() private config: Record<string, any>;

  public static getConfigElement(): CardEditorComponent {
    return <CardEditorComponent>document.createElement(APP_CONFIG.editorType);
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
}
