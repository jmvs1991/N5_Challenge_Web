import { createContext } from "react";
import { IResponse } from "../../IResponse";
import { TypeDTO } from "../../Microservices/Type/Models/Type.dto";
import { TypeEntity } from "../../Microservices/Type/Models/Type.entity";
import { TypeState } from "./Type.state";

type TypeContextProps = {
  typeState: TypeState;
  getTypes: () => Promise<IResponse<TypeEntity[]>>;
  getTypeById: (id: number) => Promise<IResponse<TypeEntity>>;
  createType: (type: TypeDTO) => Promise<IResponse<TypeEntity>>;
  updateType: (id: number, type: TypeDTO) => Promise<IResponse<TypeEntity>>;
  deleteType: (id: number) => Promise<IResponse<TypeEntity>>;
};

export const TypeContext = createContext<TypeContextProps>(
  {} as TypeContextProps
);
