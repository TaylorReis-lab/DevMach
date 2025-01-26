import axios from "axios";

const apidemach = axios.create({
    baseURL: 'http://localhost:3001/users'
})

export default apidemach