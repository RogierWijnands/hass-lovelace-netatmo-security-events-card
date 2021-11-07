// Packages
import { html, TemplateResult } from 'lit';

// Types
import { CardConfig } from '../../lib/types/card-config.type';

export function CardEditorComponentTemplate(
  config: CardConfig,
  onValueChanged: Function
): TemplateResult {
  return html` <div class="card-config">
    <paper-input
      label="Name (Optional)"
      .value=${config.name}
      .configValue=${'name'}
      @value-changed=${onValueChanged}
    ></paper-input>
  </div>`;
}
