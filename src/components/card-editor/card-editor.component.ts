// Packages
import {
  customElement,
  LitElement,
  property,
  TemplateResult,
  html,
} from 'lit-element';
import { HomeAssistant } from 'custom-card-helpers';

// Types
import { WindowCardEditor } from '../../lib/types/editor-config.type';

// Config
import { CONFIG } from '../../lib/config/config';

@customElement(CONFIG.editorType)
export class CardEditorComponent extends LitElement {
  @property() private config: Record<string, any>;
  @property() private hass: HomeAssistant;

  public setConfig(config: Record<string, any>): void {
    this.config = config;
  }

  protected render(): TemplateResult {
    return html``;
  }
}

if (!customElements.get(CONFIG.editorType)) {
  customElements.define(CONFIG.editorType, CardEditorComponent);
  console.log(`${CONFIG.name} editor loaded!`);
}
(<WindowCardEditor>window).customCards =
  (<WindowCardEditor>window).customCards || [];
(<WindowCardEditor>window).customCards.push({
  type: CONFIG.type,
  name: CONFIG.name,
  description: CONFIG.description,
});
