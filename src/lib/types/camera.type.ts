export type NetatmoCamera = {
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
};
