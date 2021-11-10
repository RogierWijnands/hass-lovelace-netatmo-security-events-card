export type APIResponse<DataType> = {
  body: DataType;
  status: string;
  time_exec: number;
  time_server: number;
};
