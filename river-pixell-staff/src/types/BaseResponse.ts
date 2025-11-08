export type BaseResponse<T> = {
  status: "success" | "error";
  data?: T;
  message?: string;
  error?: string;
  code?: string;
};
