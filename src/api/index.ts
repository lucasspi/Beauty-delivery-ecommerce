import { CONFIG } from "./config";

const api = {
  get: async (endpoint: string) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`${CONFIG.api_base_url + endpoint}`, requestOptions)
      .then((response) => response)
      .catch((error) => error);
  },

  post: async (endpoint: string, body: any) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    return fetch(`${CONFIG.api_base_url + endpoint}`, requestOptions)
      .then((response) => response.json())
      .then((response) => response)
      .catch((error) => error);
  },
};

export { api };
