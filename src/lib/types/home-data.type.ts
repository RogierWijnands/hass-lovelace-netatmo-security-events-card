// Types
import { NetatmoEvent } from './event.type';

export type HomeData = {
  id: string;
  name: string;
  place: {
    city: string;
    country: string;
    timezone: string;
  };
  persons: {
    id: string;
    last_seen: number;
    out_of_sight: boolean;
    face: {
      id: string;
      version: number;
      key: string;
      url: string;
    };
    pseudo: string;
  }[];
  camera: {
    id: string;
    type: string;
    status: string;
    vpn_url: string;
    is_local: boolean;
    sd_status: string;
    alim_status: string;
    name: string;
    use_pin_code: boolean;
    last_setup: number;
    modules: {
      id: string;
      type: string;
      battery_percent: number;
      rf: number;
      status: string;
      monitoring: string;
      alim_source: string;
      tamper_detection_enabled: boolean;
      name: string;
    }[];
  }[];
  smokedetectors: {
    id: string;
    type: string;
    last_setup: number;
    name: string;
  }[];
  events: NetatmoEvent[];
};
