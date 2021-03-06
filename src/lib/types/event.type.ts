// Enum
import { NetatmoEventType } from '../enum/event-type.enum';

export type NetatmoEvent = {
  id: string;
  type: NetatmoEventType;
  time: number;
  camera_id?: string;
  device_id?: string;
  snapshot?: {
    id: string;
    version: number;
    key: string;
    url: string;
  };
  vignette?: {
    id: string;
    version: number;
    key: string;
    url: string;
  };
  video_id?: string;
  video_status?: string;
  message: string;
  event_list?: NetatmoEvent[];
};
