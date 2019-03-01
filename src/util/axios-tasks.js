import axios from "axios";
import { DB_BASE_URL } from "./constants";

const instance = axios.create({
    baseURL: DB_BASE_URL
})

export default instance;