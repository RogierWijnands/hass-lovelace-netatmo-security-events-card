// Packages
import { LitElement, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit-element';
import { fireEvent, HomeAssistant } from 'custom-card-helpers';

// Types
import { CardEditorWindow } from '../../lib/types/editor-config.type';
import { CardConfig } from '../../lib/types/card-config.type';
import { EditorField } from '../../lib/types/editor-field.type';

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
  @state() private config: CardConfig;

  public setConfig(config: CardConfig): void {
    this.config = config;
  }

  protected render(): TemplateResult {
    return CardEditorComponentTemplate(
      this.config,
      this.onValueChanged.bind(this)
    );
  }

  private onValueChanged(changedEl: EditorField): void {
    this.config = {
      ...this.config,
      [changedEl.target.configValue]: changedEl.target.value,
    };
    fireEvent(this, 'config-changed', { config: this.config });
  }
}
