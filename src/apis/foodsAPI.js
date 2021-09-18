import axios from "axios";
// const API_URL = 'http://localhost:3000/customers'
const API_URL = 'https://halimsyarif249.herokuapp.com/customers'

const instance = axios.create({
    baseURL: API_URL
})

export default instance