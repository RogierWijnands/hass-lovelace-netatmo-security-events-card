// Packages
import { html, TemplateResult } from 'lit';

// Types
import { CardConfig } from '../../lib/types/card-config.type';
import { NetatmoEvent } from '../../lib/types/event.type';

// Enum
import { NetatmoEventType } from '../../lib/enum/event-type.enum';

// Helpers
import { parseStringAsHTML } from '../../lib/helpers/parse-string-as-html.helper';

export function EventListComponentTemplate(
  config: CardConfig,
  eventIconMap: Map<NetatmoEventType, string>,
  eventList?: NetatmoEvent[]
): TemplateResult {
  return eventList
    ? html`${eventList.map((netatmoEvent: NetatmoEvent) => {
        return html`<div class="entity-row">
          <div class="icon">
            <ha-icon
              .icon=${`mdi:${
                eventIconMap.get(netatmoEvent.type) || 'clock-fast'
              }`}
            ></ha-icon>
          </div>
          <div class="name">
            ${parseStringAsHTML(netatmoEvent.message)}
            <div class="secondary">${netatmoEvent.time}</div>
          </div>
        </div>`;
      })}`
    : html`No events found`;
}
