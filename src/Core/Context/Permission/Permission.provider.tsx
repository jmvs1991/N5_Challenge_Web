import { useReducer } from "react";
import { IResponse } from "../../IResponse";
import { PermissionDTO } from "../../Microservices/Permission/Models/Permission.dto";
import { PermissionEntity } from "../../Microservices/Permission/Models/Permission.entity";
import { Result } from "../../Utils/Enum";
import { PermissionReducer } from "./Permission.reducer";
import { PermissionState } from "./Permission.state";
import {
  Post,
  Put,
  Delete,
} from "./../../Microservices/Permission/Services/Command/PermissionCommand.service";
import {
  GetById,
  Get,
} from "./../../Microservices/Permission/Services/Query/PermissionQuery.service";
import { PermissionContext } from "./Permission.context";

const INITIAL_STATE: PermissionState = {
  loading: false,
  permissions: [],
};

type PermissionProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const PermissionProvider: React.FC<PermissionProviderProps> = ({
  children,
}) => {
  const [permissionState, dispatch] = useReducer(
    PermissionReducer,
    INITIAL_STATE
  );

  const getPermissions = async (): Promise<IResponse<PermissionEntity[]>> => {
    const response: IResponse<PermissionEntity[]> = {
      result: Result.E,
      message: "",
      payload: [],
    };

    try {
      dispatch({
        type: "Loading",
      });

      const permissions: PermissionEntity[] = await Get();

      dispatch({
        type: "Get",
        payload: permissions,
      });

      response.result = Result.S;
      response.payload = permissions;
    } catch (error) {
      dispatch({
        type: "Error",
      });

      response.result = Result.E;
      response.message = "";
    }

    return response;
  };

  const getPermissionById = async (
    id: number
  ): Promise<IResponse<PermissionEntity>> => {
    const response: IResponse<PermissionEntity> = {
      result: Result.E,
      message: "",
      payload: new PermissionEntity(),
    };

    try {
      dispatch({
        type: "Loading",
      });

      const permission: PermissionEntity = await GetById(id);

      dispatch({
        type: "GetById",
      });

      response.result = Result.S;
      response.payload = permission;
    } catch (error) {
      dispatch({
        type: "Error",
      });

      response.result = Result.E;
      response.message = "";
    }

    return response;
  };

  const createPermission = async (
    permission: PermissionDTO
  ): Promise<IResponse<PermissionEntity>> => {
    const response: IResponse<PermissionEntity> = {
      result: Result.E,
      message: "",
      payload: new PermissionEntity(),
    };

    try {
      dispatch({
        type: "Loading",
      });

      await Post(permission);

      dispatch({
        type: "Command",
      });

      response.result = Result.S;
    } catch (error) {
      dispatch({
        type: "Error",
      });

      response.result = Result.E;
      response.message = "";
    }

    return response;
  };

  const updatePermission = async (
    id: number,
    permission: PermissionDTO
  ): Promise<IResponse<PermissionEntity>> => {
    const response: IResponse<PermissionEntity> = {
      result: Result.E,
      message: "",
      payload: new PermissionEntity(),
    };

    try {
      dispatch({
        type: "Loading",
      });

      await Put(id, permission);

      dispatch({
        type: "Command",
      });

      response.result = Result.S;
    } catch (error) {
      dispatch({
        type: "Error",
      });

      response.result = Result.E;
      response.message = "";
    }

    return response;
  };

  const deletePermission = async (
    id: number
  ): Promise<IResponse<PermissionEntity>> => {
    const response: IResponse<PermissionEntity> = {
      result: Result.E,
      message: "",
      payload: new PermissionEntity(),
    };

    try {
      dispatch({
        type: "Loading",
      });

      await Delete(id);

      dispatch({
        type: "Command",
      });

      response.result = Result.S;
    } catch (error) {
      dispatch({
        type: "Error",
      });

      response.result = Result.E;
      response.message = "";
    }

    return response;
  };

  return (
    <PermissionContext.Provider
      value={{
        permissionState,
        getPermissions,
        getPermissionById,
        createPermission,
        updatePermission,
        deletePermission,
      }}
    >
      {children}
    </PermissionContext.Provider>
  );
};
