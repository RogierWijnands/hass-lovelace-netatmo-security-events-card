export type EditorConfig = {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
};

export type CardEditorWindow = typeof window & {
  customCards: EditorConfig[];
};
