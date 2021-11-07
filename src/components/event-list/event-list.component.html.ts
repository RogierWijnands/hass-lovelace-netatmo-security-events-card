// Packages
import { html, TemplateResult } from 'lit';

// Types
import { CardConfig } from '../../lib/types/card-config.type';

export function EventListComponentTemplate(config: CardConfig): TemplateResult {
  return html` Events list ${JSON.stringify(config)}`;
}
