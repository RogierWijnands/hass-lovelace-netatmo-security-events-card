// Packages
import { HomeAssistant } from 'custom-card-helpers';
import { LitElement, TemplateResult } from 'lit';
import { property, customElement, state } from 'lit-element';

// Config
import { CONFIG } from './lib/config/config';

// Types
import { WindowCardEditor } from './lib/types/editor-config.type';

// Components
import { EventListComponent } from './components/event-list/event-list.component';
import { CardEditorComponent } from './components/card-editor/card-editor.component';

// Rollup
import './components/card-editor/card-editor.component';

// Add card to editor
(<WindowCardEditor>window).customCards =
  (<WindowCardEditor>window).customCards || [];
(<WindowCardEditor>window).customCards.push({
  type: CONFIG.type,
  name: CONFIG.name,
  description: CONFIG.description,
});

@customElement(CONFIG.type)
class NetatmoSecurityEventsCard extends LitElement {
  @property() public hass: HomeAssistant;
  @state() private config: Record<string, any>;

  public static getConfigElement(): CardEditorComponent {
    return <CardEditorComponent>document.createElement(CONFIG.editorType);
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
