import request from "@/utils/axios";

export const refreshToken = (data: { refresh_token: string | null; }, headers = {}) => {
  return request(`${process.env.BASE_URL}/auth/refresh-token`, {
    method: "post",
    headers,
    data,
  });
};
