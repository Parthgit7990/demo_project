import axios from "axios";

const username = process.env.NEXT_PUBLIC_USERNAME;
const password = process.env.NEXT_PUBLIC_PASSWORD;

const auth = Buffer.from(`${username}:${password}`).toString("base64");

const axiosInstance = axios.create({
  baseURL: data.NEXT_PUBLIC_WORDPRESS_API_URL,
  headers: {
    Authorization: `Basic ${auth}`,
  },
});

export default axiosInstance;
