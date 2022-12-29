import React, { useEffect, useState } from "react";
import { useType } from "../../Core/Context/Type/Type.hook";
import { usePermission } from "../../Core/Context/Permission/Permission.hook";
import { Result } from "../../Core/Utils/Enum";
import { PermissionEntity } from "../../Core/Microservices/Permission/Models/Permission.entity";
import { LoadingComponent } from "../../Shared/Components/Loading.component";
import { PermissionTableComponent } from "./Components/Table/Permission-Table.component";
import { Grid } from "@mui/material";
import { ActionsComponent } from "./../../Shared/Components/Actions.component";
import { PermissionDialog } from "./Dialogs/Permission/Permission.dialog";
import { PermissionDTO } from "../../Core/Microservices/Permission/Models/Permission.dto";

export const PermissionPage = () => {
  const { loading: loadingTypes, types, getTypes } = useType();
  const {
    loading: loadingPermissions,
    permissions,
    getPermissions,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission,
  } = usePermission();

  const [permissionModal, setPermissionModal] = useState({
    show: false,
    permission: new PermissionEntity(),
    isNew: false,
  });

  useEffect(() => {
    if (types.length <= 0) {
      searchTypes();
    }

    if (permissions.length <= 0) {
      searchPermissions();
    }
  }, []);

  const searchTypes = async () => {
    await getTypes();
  };

  const searchPermissions = async () => {
    await getPermissions();
  };

  const handleSelect = async (id: number) => {
    const { result, payload } = await getPermissionById(id);

    if (result === Result.S) {
      setPermissionModal({
        ...permissionModal,
        show: true,
        isNew: false,
        permission: payload,
      });
    }
  };

  const handleDelete = async (id: number) => {
    await deletePermission(id);
    await searchPermissions();
  };

  const handleAdd = () => {
    setPermissionModal({
      ...permissionModal,
      show: true,
      isNew: true,
      permission: new PermissionEntity(),
    });
  };

  const handleSave = async (permission: PermissionEntity) => {
    const { id, firstName, lastName, typeId } = permission;
    const { isNew } = permissionModal;

    const permissionDTO: PermissionDTO = {
      firstName: firstName,
      lastName: lastName,
      typeId: typeId,
    };

    handleClose();

    if (isNew) {
      await createPermission(permissionDTO);
    } else {
      await updatePermission(id, permissionDTO);
    }

    await searchPermissions();
  };

  const handleClose = () => {
    setPermissionModal({
      ...permissionModal,
      show: false,
      isNew: false,
      permission: new PermissionEntity(),
    });
  };

  return (
    <>
      <LoadingComponent show={loadingPermissions || loadingTypes} />
      <PermissionDialog
        open={permissionModal.show}
        permission={permissionModal.permission}
        types={types}
        onClose={handleClose}
        onSave={handleSave}
      />
      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <PermissionTableComponent
            permissions={permissions}
            selectPermission={handleSelect}
            deletePermission={handleDelete}
          />
        </Grid>
        <Grid container item xs={12} direction="row" justifyContent="flex-end">
          <ActionsComponent onClick={handleAdd} />
        </Grid>
      </Grid>
    </>
  );
};
