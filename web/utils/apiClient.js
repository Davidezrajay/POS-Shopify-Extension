import axios from "axios";
import "dotenv/config";

const apiClient = axios.create({
  baseURL: `${process.env.TREETRACKER_WALLET_API_ROOT}`,
  headers: {
    "Content-Type": "application/json",
    "TREETRACKER-API-KEY": `${process.env.TREETRACKER_WALLET_API_KEY}`,
  },
});

apiClient.setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common["Authorization"];
  }
};

// Custom method to set auth header and make API call
apiClient.setAuthHeader = (token) => {
  apiClient.setAuthToken(token);
  return apiClient;
};

export default apiClient;
