import axios, { AxiosInstance } from "axios";
const baseUrl = "https://rickandmortyapi.com/api";
const apiFetch: AxiosInstance = axios.create({ baseURL: baseUrl });
export default apiFetch;
