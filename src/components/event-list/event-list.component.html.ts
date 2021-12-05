// Packages
import { html, TemplateResult } from 'lit';

// Types
import { NetatmoEvent } from '../../lib/types/event.type';

// Enum
import { NetatmoEventType } from '../../lib/enum/event-type.enum';
import { VideoStatus } from '../../lib/enum/video_status.enum';

// Helpers
import { outputToHTML } from '../../lib/helpers/output-to-html.helper';
import { outputToDate } from '../../lib/helpers/output-to-date.helper';

export function EventListComponentHtml(
  eventClickHandler: Function,
  eventIconMap: Map<NetatmoEventType, string>,
  loadEventsFn: Function,
  eventList?: NetatmoEvent[],
  eventMediaUrl?: string,
  loading?: boolean,
): TemplateResult {
  return eventList?.length
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
            ${netatmoEvent.video_id && netatmoEvent.video_status !== VideoStatus.DELETED && netatmoEvent.camera_id
              ? html`<span class="netatmo-security-event__play-icon"
                  >&#9658;</span
                >`
              : void 0}
            <div class="netatmo-security-event__content-secondary">
              ${outputToDate(netatmoEvent.time)}
            </div>
          </div>
        </div>`;
      })}${eventMediaUrl
        ? html`<div
              class="netatmo-security-event__dialog-bg"
              @click="${() => eventClickHandler(undefined)}"
            ></div>
            <video
              class="netatmo-security-event__dialog-video"
              autoplay
              controls
              src="${eventMediaUrl}"
            ></video>`
        : void 0}`
    : loading 
      ? html`<ha-circular-progress class="render-spinner" active="" size="small" progress="0"></ha-circular-progress>` 
      : html`No events found<br><a href="#" @click="${() => loadEventsFn()}"><u>Try again</u></a>`;
}
