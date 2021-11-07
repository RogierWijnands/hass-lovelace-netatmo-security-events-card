// Types
import { EditorConfig } from './editor-config.type';

type APIConfig = {
  url: string;
  headers?: Record<string, string>;
  scopes?: string[];
};

export type AppConfig = EditorConfig & {
  editorType: string;
  components: { card: string; editor: string; eventList: string };
  api: {
    baseUrl: string;
    auth: APIConfig;
    homeData: APIConfig;
  };
  storage: {
    key: string;
    method: typeof localStorage | typeof sessionStorage;
  };
};
