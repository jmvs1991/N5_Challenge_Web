import axios from "axios"
import { TypeEntity } from "../../Models/Type.entity";
import { __UrlQueryApi } from "./../../../../enviroment";

const __Endpoint: string = "Type";

export const Get = async (): Promise<TypeEntity[]> => {
    try {
        const response = await axios.get<TypeEntity[]>(`${__UrlQueryApi}${__Endpoint}`);

        if (response.status === 200) {
            return response.data
        }
        else {
            throw new Error(`Types Errro: ${response.statusText}`);
        }

    } catch (error) {
        throw error;
    }
}

export const GetById = async (id: number): Promise<TypeEntity> => {
    try {

        const response = await axios.get<TypeEntity>(`${__UrlQueryApi}${__Endpoint}/${id}`);

        if (response.status === 200) {
            return response.data
        }
        else {
            throw new Error(`Types Errro: ${response.statusText}`);
        }
    } catch (error) {
        throw error;
    }
}