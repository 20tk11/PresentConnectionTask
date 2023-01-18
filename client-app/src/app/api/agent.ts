import axios, { AxiosResponse } from "axios"
import { Country } from "../models/country";
import { TaxData } from "../models/taxData";

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;

    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
}

const Countries = {
    get: () => requests.get<Array<Country>>("/countries"),
}
const Tax = {
    post: (data: TaxData) => requests.post("/tax", data),
}

const agent = {
    Countries,
    Tax
}

export default agent;