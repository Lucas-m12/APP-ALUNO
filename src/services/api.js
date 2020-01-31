import axios from "axios";

const api = axios.create({
	baseURL: "http://200.98.166.84/webservice"
});

export default api;
