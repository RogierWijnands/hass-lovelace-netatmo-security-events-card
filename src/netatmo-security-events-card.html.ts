// Packages
import { html, TemplateResult } from 'lit';

// Types
import { CardConfig } from './lib/types/card-config.type';

export function NetatmoSecurityEventsCardTemplate(
  config: CardConfig
): TemplateResult {
  return html` <ha-card .header=${config.name}>
    <div class="card-content">
      <netatmo-security-events-list
        .config="${config}"
      ></netatmo-security-events-list>
    </div>
  </ha-card>`;
}
