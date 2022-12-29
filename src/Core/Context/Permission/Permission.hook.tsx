import { useContext } from "react";
import { PermissionContext } from "./Permission.context";

export const usePermission = () => {
  const {
    permissionState,
    getPermissions,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission,
  } = useContext(PermissionContext);
  const { loading, permissions } = permissionState;

  return {
    loading,
    permissions,
    getPermissions,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission,
  };
};
