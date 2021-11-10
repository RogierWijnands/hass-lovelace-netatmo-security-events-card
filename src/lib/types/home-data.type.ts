// Types
import { NetatmoEvent } from './event.type';
import { NetatmoCamera } from './camera.type';

export type NetatmoHome = {
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
  cameras: NetatmoCamera[];
  smokedetectors: {
    id: string;
    type: string;
    last_setup: number;
    name: string;
  }[];
  events: NetatmoEvent[];
};

export type NetatmoHomeData = {
  homes: NetatmoHome[];
  global_info: {
    show_tags: boolean;
  };
  user: {
    country: string;
    lang: string;
    mail: string;
    reg_locale: string;
  };
};
