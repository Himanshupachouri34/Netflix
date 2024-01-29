import axios from "axios";

const axiosFile = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default axiosFile;