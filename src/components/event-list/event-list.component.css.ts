// Packages
import { css, CSSResult } from 'lit-element';

export function EventListComponentCss(): CSSResult {
  return css`
    .netatmo-security-event {
      width: 100%;
      display: inline-block;
      cursor: pointer;
    }
    .netatmo-security-event:not(:last-of-type) {
      margin-bottom: 10px;
    }
    .netatmo-security-event__icon {
      padding-right: 40px;
    }
    .netatmo-security-event__content {
      width: calc(100% - 40px);
      float: right;
    }
    .netatmo-security-event__content-secondary {
      opacity: 0.5;
    }
    .netatmo-security-event__dialog-bg {
      position: fixed;
      height: 100vh;
      width: 100vw;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.8);
    }
    .netatmo-security-event__dialog-video {
      position: fixed;
      left: 50%;
      top: 50vh;
      transform: translateX(-50%) translateY(-25vh);
      width: 500px;
      max-width: 90vw;
      background-color: #ffffff;
    }
    .netatmo-security-event__play-icon {
      display: inline-block;
      margin-left: 3px;
    }
  `;
}
