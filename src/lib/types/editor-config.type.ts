export type EditorConfig = {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
};

export type WindowCardEditor = typeof window & {
  customCards: EditorConfig[];
};
