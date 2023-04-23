import request from "@/utils/axios";

export const refreshToken = (data, headers = {}) => {
  return request(`${process.env.BASE_URL}/auth/refresh-token`, {
    method: "post",
    data,
    headers,
  });
};
