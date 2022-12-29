import { PermissionEntity } from "../../Microservices/Permission/Models/Permission.entity";

export interface PermissionState{
    loading: boolean;
    permissions: PermissionEntity[];
}