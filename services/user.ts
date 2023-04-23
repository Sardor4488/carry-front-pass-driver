import request from "@/utils/axios";
import type { User } from "@/types/user";
import { Fetcher } from "swr";

export const getUsers: Fetcher<User[], string> = () => {
  return request("/users");
};
