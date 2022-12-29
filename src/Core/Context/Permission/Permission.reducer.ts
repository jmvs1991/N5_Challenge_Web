import { PermissionActions } from "./Permission.actions";
import { PermissionState } from "./Permission.state";

export const PermissionReducer = (state: PermissionState, action: PermissionActions): PermissionState => {
    switch (action.type) {
        case "Get":
            return {
                ...state,
                loading: false,
                permissions: action.payload || []
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