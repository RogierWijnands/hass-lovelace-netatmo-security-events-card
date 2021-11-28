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
    .netatmo-security-event__content--secondary {
      opacity: 0.5;
    }
  `;
}
