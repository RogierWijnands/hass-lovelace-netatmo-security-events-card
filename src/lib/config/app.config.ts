// Types
import { AppConfig } from '../types/app-config.type';

export const APP_CONFIG: AppConfig = {
  type: 'netatmo-security-events-card',
  editorType: 'netatmo-security-events-card-editor',
  name: 'Netatmo Security Events',
  description:
    'A card layout for the Home Assistant theme Lovelace which renders the Netatmo Security event list, displaying event types and linking to the recorded video when available.',
  components: {
    card: 'netatmo-security-events-card',
    editor: 'netatmo-security-events-card-editor',
  },
};
