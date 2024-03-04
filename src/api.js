import ConvertApi from "convertapi-js";

export const api = ConvertApi.auth(import.meta.env.VITE_API_KEY);
