// Packages
import { html, TemplateResult } from 'lit';

// Types
import { CardConfig } from '../../lib/types/card-config.type';
import { NetatmoEvent } from '../../lib/types/event.type';

// Enum
import { NetatmoEventType } from '../../lib/enum/event-type.enum';

// Helpers
import { outputToHTML } from '../../lib/helpers/output-to-html.helper';
import { outputToDate } from '../../lib/helpers/output-to-date.helper';

export function EventListComponentHtml(
  config: CardConfig,
  eventClickHandler: Function,
  eventIconMap: Map<NetatmoEventType, string>,
  eventList?: NetatmoEvent[]
): TemplateResult {
  return eventList
    ? html`${eventList.map((netatmoEvent: NetatmoEvent) => {
        return html`<div
          class="netatmo-security-event"
          @click="${() => eventClickHandler(netatmoEvent)}"
        >
          <state-badge
            class="netatmo-security-event__icon"
            .overrideIcon=${`mdi:${
              eventIconMap.get(netatmoEvent.type) || 'clock-fast'
            }`}
          ></state-badge>
          <div class="netatmo-security-event__content">
            ${outputToHTML(netatmoEvent.message)}
            <div class="netatmo-security-event__content--secondary">
              ${outputToDate(netatmoEvent.time)}
            </div>
          </div>
        </div>`;
      })}`
    : html`No events found`;
}
