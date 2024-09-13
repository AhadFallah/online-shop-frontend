import axios from "axios";

const axiosClient = axios.create({
	baseURL: "api/",
});
axiosClient.interceptors.request.use((config) => {
	const token = localStorage.getItem("ACCESS_TOKEN");
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});
export default axiosClient;
