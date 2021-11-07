// Types
import { EditorConfig } from './editor-config.type';

export type AppConfig = EditorConfig & {
  editorType: string;
  components: { card: string; editor: string };
};
