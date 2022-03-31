import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://orchid-blog.herokuapp.com/api/",
})