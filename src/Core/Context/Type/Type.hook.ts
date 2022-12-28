import { useContext } from "react";
import { TypeContext } from "./Type.context";

export const useType = () => {
    const { typeState, getTypes, getTypeById, createType, updateType, deleteType } = useContext(TypeContext);
    const { loading, types } = typeState;

    return {
        loading,
        types,
        getTypes,
        getTypeById,
        createType,
        updateType,
        deleteType
    };
}