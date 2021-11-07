// Packages
import { TemplateResult } from 'lit';

// Types
import { CardConfig } from '../../lib/types/card-config.type';

// Template
import { EventListComponentTemplate } from './event-list.component.html';

export class EventListComponent {
  private readonly config: CardConfig;

  constructor(config: CardConfig) {
    this.config = config;
  }

  public render(): TemplateResult {
    return EventListComponentTemplate(this.config);
  }
}
