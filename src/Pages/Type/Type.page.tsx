import { useEffect, useState } from "react";
import { useType } from "./../../Core/Context/Type/Type.hook";
import { TypeTableComponent } from "./Components/Table/Type-Table.component";
import { LoadingComponent } from "./../../Shared/Components/Loading.component";
import { TypeActionsComponent } from "./Components/Actions/Type-Actions.component";
import { TypeDialog } from "./Dialogs/Type/Type.dialog";
import { Grid } from "@mui/material";
import { TypeEntity } from "../../Core/Microservices/Type/Models/Type.entity";
import { boolean } from "yup/lib/locale";
import { type } from "os";
import { Result } from "../../Core/Utils/Enum";
import { TypeDTO } from "../../Core/Microservices/Type/Models/Type.dto";

export const TypePage = () => {
  const { loading, types, getTypes, getTypeById, createType, updateType, deleteType } = useType();
  const [typeModal, setTypeModal] = useState({
    show: false,
    type: new TypeEntity(),
    isNew: false,
  });

  useEffect(() => {
    if (types.length <= 0) {
      searchTypes();
    }
  }, []);

  const searchTypes = async () => {
    const typesResponse = await getTypes();
  };

  const handleSelect = async (id: number) => {
    const { result, payload } = await getTypeById(id);

    if (result === Result.S) {
      setTypeModal({
        ...typeModal,
        show: true,
        isNew: false,
        type: payload,
      });
    }
  };

  const handleDelete = async (id: number) => {
    await deleteType(id);
    await searchTypes();
  };

  const handleAdd = () => {
    setTypeModal({
      ...typeModal,
      show: true,
      isNew: true,
      type: new TypeEntity(),
    });
  };

  const handleSave = async (type: TypeEntity) => {
    const { id, description } = type;
    const { isNew } = typeModal;
    
    const typeDTO: TypeDTO = {
      description: description,
    };
    
    handleClose();

    if (isNew) {
      const response = await createType(typeDTO);

      console.log(response);
    }else{
      await updateType(id, typeDTO);
    }

    await searchTypes();
  };

  const handleClose = () => {
    setTypeModal({
      ...typeModal,
      show: false,
      isNew: false,
      type: new TypeEntity(),
    });
  };

  return (
    <>
      <LoadingComponent show={loading} />
      <TypeDialog
        open={typeModal.show}
        type={typeModal.type}
        onSave={handleSave}
        onClose={handleClose}
      />
      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <TypeTableComponent
            types={types}
            selectType={handleSelect}
            deleteType={handleDelete}
          />
        </Grid>
        <Grid container item xs={12} direction="row" justifyContent="flex-end">
          <TypeActionsComponent addType={handleAdd} />
        </Grid>
      </Grid>
    </>
  );
};
