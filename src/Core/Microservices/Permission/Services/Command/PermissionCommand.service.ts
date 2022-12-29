import axios from "axios"
import { __UrlCommandApi } from "../../../../enviroment";
import { PermissionDTO } from "../../Models/Permission.dto";

const __Endpoint: string = "Permission";

export const Post = async (permission: PermissionDTO): Promise<void> => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const data = JSON.stringify(permission);

        const response = await axios.post(`${__UrlCommandApi}${__Endpoint}`, data, config);

        if (response.status !== 200)
            throw new Error(`Permission error ${response.statusText}`);

    } catch (error) {
        throw error;
    }
}

export const Put = async (id: number, permission: PermissionDTO) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const data = JSON.stringify(permission);

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