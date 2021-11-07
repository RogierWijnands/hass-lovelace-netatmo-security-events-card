// Packages
import { LitElement, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit-element';
import { HomeAssistant } from 'custom-card-helpers';

// Types
import { CardEditorWindow } from '../../lib/types/editor-config.type';

// Config
import { APP_CONFIG } from '../../lib/config/app.config';

// Template
import { CardEditorComponentTemplate } from './card-editor.component.html';

// Add card to editor
(<CardEditorWindow>window).customCards =
  (<CardEditorWindow>window).customCards || [];
(<CardEditorWindow>window).customCards.push({
  type: APP_CONFIG.type,
  name: APP_CONFIG.name,
  description: APP_CONFIG.description,
});

@customElement(APP_CONFIG.components.editor)
export class CardEditorComponent extends LitElement {
  @property() public hass: HomeAssistant;
  @state() private config: Record<string, any>;

  public setConfig(config: Record<string, any>): void {
    this.config = config;
  }

  protected render(): TemplateResult {
    return CardEditorComponentTemplate();
  }
}
