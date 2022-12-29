import axios from "axios"
import { PermissionEntity } from "../../Models/Permission.entity";
import { __UrlQueryApi } from "./../../../../enviroment";

const __Endpoint: string = "Permission";

export const Get = async (): Promise<PermissionEntity[]> => {
    try {
        const response = await axios.get<PermissionEntity[]>(`${__UrlQueryApi}${__Endpoint}`);

        if (response.status === 200) {
            return response.data
        }
        else {
            throw new Error(`Permission Errro: ${response.statusText}`);
        }

    } catch (error) {
        throw error;
    }
}

export const GetById = async (id: number): Promise<PermissionEntity> => {
    try {

        const response = await axios.get<PermissionEntity>(`${__UrlQueryApi}${__Endpoint}/${id}`);

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