import react from "react";
import { useReducer } from "react";
import { TypeEntity } from "../../Microservices/Type/Models/Type.entity";
import { TypeContext } from "./Type.context";
import { TypeReducer } from "./Type.reducer";
import { TypeState } from "./Type.state";
import {
  Get,
  GetById,
} from "./../../Microservices/Type/Services/Query/TypeQuery.service";
import {
  Post,
  Put,
  Delete,
} from "../../Microservices/Type/Services/Command/TypeCommand.service";
import { IResponse } from "../../IResponse";
import { Result } from "../../Utils/Enum";
import { TypeDTO } from "../../Microservices/Type/Models/Type.dto";

const INITIAL_STATE: TypeState = {
  loading: false,
  types: [],
};

type TypeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const TypeProvider: React.FC<TypeProviderProps> = ({ children }) => {
  const [typeState, dispatch] = useReducer(TypeReducer, INITIAL_STATE);

  const getTypes = async (): Promise<IResponse<TypeEntity[]>> => {
    const response: IResponse<TypeEntity[]> = {
      result: Result.E,
      message: "",
      payload: [],
    };

    try {
      dispatch({
        type: "Loading",
      });

      const types: TypeEntity[] = await Get();

      dispatch({
        type: "Get",
        payload: types,
      });

      response.result = Result.S;
      response.payload = types;
    } catch (error) {
      dispatch({
        type: "Error",
      });

      response.result = Result.E;
      response.message = "";
    }

    return response;
  };

  const getTypeById = async (id: number): Promise<IResponse<TypeEntity>> => {
    const response: IResponse<TypeEntity> = {
      result: Result.E,
      message: "",
      payload: new TypeEntity(),
    };

    try {
      dispatch({
        type: "Loading",
      });

      const type: TypeEntity = await GetById(id);

      dispatch({
        type: "GetById",
      });

      response.result = Result.S;
      response.payload = type;
    } catch (error) {
      dispatch({
        type: "Error",
      });

      response.result = Result.E;
      response.message = "";
    }

    return response;
  };

  const createType = async (type: TypeDTO): Promise<IResponse<TypeEntity>> => {
    const response: IResponse<TypeEntity> = {
      result: Result.E,
      message: "",
      payload: new TypeEntity(),
    };

    try {
      dispatch({
        type: "Loading",
      });

      await Post(type);

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

  const updateType = async (
    id: number,
    type: TypeDTO
  ): Promise<IResponse<TypeEntity>> => {
    const response: IResponse<TypeEntity> = {
      result: Result.E,
      message: "",
      payload: new TypeEntity(),
    };

    try {
      dispatch({
        type: "Loading",
      });

      await Put(id, type);

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

  const deleteType = async (id: number): Promise<IResponse<TypeEntity>> => {
    const response: IResponse<TypeEntity> = {
      result: Result.E,
      message: "",
      payload: new TypeEntity(),
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
    <TypeContext.Provider
      value={{
        typeState,
        getTypes,
        getTypeById,
        createType,
        updateType,
        deleteType,
      }}
    >
      {children}
    </TypeContext.Provider>
  );
};
