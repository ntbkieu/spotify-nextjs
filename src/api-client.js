// Setup fetch instance with base url and check token from local storage
export const API_URL = "/api";

export const TOKEN_KEY = "jwt-token";

export const customHeader = (token) => {
  const header = {
    "Content-Type": "application/json; charset=utf-8",
  };
  if (token && token !== "undefined") {
    header["Authorization"] = `JWT ${token || ""}`;
  }
  return header;
};

const base = async (method, url, data = {}) => {
  let token = localStorage.getItem(TOKEN_KEY);
  if (token && token !== "undefined") token = token.replace(/"/g, "");
  const metaData = {
    method,
    headers: customHeader(token),
  };
  if (["post", "put", "patch"].includes(method)) {
    metaData.body = JSON.stringify(data);
  }
  if (method === "file") {
    metaData.method = "POST";
    metaData.body = data;
  }
  let endpoint = `${API_URL}${url}`;
  if (window && window.location && window.location.protocol === "http:") {
    endpoint = endpoint.replace("https:", "http:");
  }
  const response = await fetch(endpoint, metaData);
  if (token && token !== "undefined" && response.status === 401) {
    localStorage.removeItem(TOKEN_KEY);
    window.location.reload();
  }
  if (response.status !== 200) {
    const error = {
      status: response.status,
      message: response.statusText,
      data: false,
      error: true,
    };
    try {
      error.data = await response.json();
    } catch (e) {
      error.data = false;
    }
    return error;
  }
  try {
    return {
      status: response.status,
      data: await response.json(),
      error: false,
    };
  } catch (e) {
    return {
      status: response.status,
      data: false,
      error: false,
    };
  }
};

const fetchClient = {};

["get", "post", "put", "delete", "patch", "file"].forEach((method) => {
  fetchClient[method] = base.bind(null, method);
});

// How to use
// import fetchClient from "@/api-client";
// const data = await fetchClient.get("/api/v1/users");
// const data = await fetchClient.post("/api/v1/users", { name: "John" });
// const data = await fetchClient.put("/api/v1/users/1", { name: "John" });
// const data = await fetchClient.delete("/api/v1/users/1");
// const data = await fetchClient.patch("/api/v1/users/1", { name: "John" });
// const data = await fetchClient.file("/api/v1/users/1", formData);

export default fetchClient;
