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
      label="Name"
      .value=${config.name}
      .configValue=${'name'}
      @value-changed=${onValueChanged}
    ></paper-input>
    <paper-input
      label="Username"
      .value=${config.username}
      .configValue=${'username'}
      @value-changed=${onValueChanged}
    ></paper-input>
    <paper-input
      label="Password"
      .value=${config.password}
      .configValue=${'password'}
      @value-changed=${onValueChanged}
      type="password"
    ></paper-input>
    <paper-input
      label="Client ID"
      .value=${config.client_id}
      .configValue=${'client_id'}
      @value-changed=${onValueChanged}
    ></paper-input>
    <paper-input
      label="Client secret"
      .value=${config.client_secret}
      .configValue=${'client_secret'}
      @value-changed=${onValueChanged}
    ></paper-input>
  </div>`;
}
