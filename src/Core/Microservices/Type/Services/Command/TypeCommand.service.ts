import axios from "axios"
import { TypeDTO } from "../../Models/Type.dto";
import { __UrlCommandApi } from "../../../../enviroment";

const __Endpoint: string = "Type";

export const Post = async (type: TypeDTO): Promise<void> => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const data = JSON.stringify(type);

        const response = await axios.post(`${__UrlCommandApi}${__Endpoint}`, data, config);

        if (response.status !== 200)
            throw new Error(`Type error ${response.statusText}`);

    } catch (error) {
        throw error;
    }
}

export const Put = async (id: number, type: TypeDTO) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const data = JSON.stringify(type);

        const response = await axios.put(`${__UrlCommandApi}${__Endpoint}/${id}`, data, config);

        if (response.status !== 200)
            throw new Error(`Type error ${response.statusText}`);
    } catch (error) {
        throw error;
    }
}

export const Delete = async (id: number) => {
    try {
        const response = await axios.delete(`${__UrlCommandApi}${__Endpoint}/${id}`);

        if (response.status !== 200)
            throw new Error(`Type error ${response.statusText}`);
    } catch (error) {
        throw error;
    }
}