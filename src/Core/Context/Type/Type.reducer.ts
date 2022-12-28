import { TypeActions } from "./Type.actions";
import { TypeState } from "./Type.state";

export const TypeReducer = (state: TypeState, action: TypeActions): TypeState => {
    switch (action.type) {
        case "Get":
            return {
                ...state,
                loading: false,
                types: action.payload || []
            }
        case "Command":
        case "Error":
        case "GetById":
            return {
                ...state,
                loading: false
            }
        case "Loading":
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};