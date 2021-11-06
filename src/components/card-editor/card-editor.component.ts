// Packages
import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, state } from 'lit-element';
import { HomeAssistant } from 'custom-card-helpers';

// Config
import { CONFIG } from '../../lib/config/config';

@customElement(CONFIG.editorType)
export class CardEditorComponent extends LitElement {
  @property() public hass: HomeAssistant;
  @state() private config: Record<string, any>;

  public setConfig(config: Record<string, any>): void {
    this.config = config;
  }

  protected render(): TemplateResult {
    return html``;
  }
}
