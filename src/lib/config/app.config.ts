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
    eventList: 'netatmo-security-events-list',
  },
  api: {
    baseUrl: 'https://api.netatmo.com',
    auth: {
      url: '/oauth2/token',
      headers: {
        Host: 'api.netatmo.com',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      scopes: [
        'read_camera',
        'access_camera',
        'read_presence',
        'access_presence',
      ],
    },
    events: {
      url: '/gethomedata',
    },
  },
  storage: {
    key: 'lovelace-netatmo-security-events-card',
    method: localStorage,
  },
};
