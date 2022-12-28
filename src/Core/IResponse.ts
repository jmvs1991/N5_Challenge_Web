import { Result } from "./Utils/Enum";

export interface IResponse<T> {
    result: Result;
    payload: T;
    message: string;
} 