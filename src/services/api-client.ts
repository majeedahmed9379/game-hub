import axios, { CanceledError } from "axios";
import { rawgKey } from "../../api-key.ts";

export const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: rawgKey,
  },
});
