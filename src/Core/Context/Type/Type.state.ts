import { TypeEntity } from "../../Microservices/Type/Models/Type.entity";

export interface TypeState{
    loading: boolean;
    types: TypeEntity[];
}