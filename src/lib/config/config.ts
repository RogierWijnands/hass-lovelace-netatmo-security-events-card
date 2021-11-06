// Types
import { Config } from '../types/config.type';

export const CONFIG: Config & { editorType: string } = {
  type: 'netatmo-security-events-card',
  editorType: 'netatmo-security-events-card-editor',
  name: 'Netatmo Security Events',
  description:
    'A card layout for the Home Assistant theme Lovelace which renders the Netatmo Security event list, displaying event types and linking to the recorded video when available.',
};
