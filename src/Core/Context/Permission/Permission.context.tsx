import { createContext } from "react";
import { IResponse } from "../../IResponse";
import { PermissionDTO } from "../../Microservices/Permission/Models/Permission.dto";
import { PermissionEntity } from "../../Microservices/Permission/Models/Permission.entity";
import { PermissionState } from "./Permission.state"

type PermissionContextProps = {
  permissionState: PermissionState;
  getPermissions: () => Promise<IResponse<PermissionEntity[]>>;
  getPermissionById: (id: number) => Promise<IResponse<PermissionEntity>>;
  createPermission: (permission: PermissionDTO) => Promise<IResponse<PermissionEntity>>;
  updatePermission: (id: number, permission: PermissionDTO) => Promise<IResponse<PermissionEntity>>;
  deletePermission: (id: number) => Promise<IResponse<PermissionEntity>>;
};

export const PermissionContext = createContext<PermissionContextProps>(
  {} as PermissionContextProps
);
