import { Modal, Box, TextField, Grid, Button, MenuItem } from "@mui/material";
import { TypeEntity } from "../../../../Core/Microservices/Type/Models/Type.entity";
import * as Yup from "yup";
import { FormikProps, useFormik } from "formik";
import { useEffect, useState } from "react";
import { PermissionEntity } from "../../../../Core/Microservices/Permission/Models/Permission.entity";

type PermissionDialogProps = {
  permission: PermissionEntity;
  types: TypeEntity[];
  open: boolean;
  onClose: () => void;
  onSave: (permission: PermissionEntity) => void;
};

type PermissionDialogForm = {
  firstName: string;
  lastName: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const PermissionDialog: React.FC<PermissionDialogProps> = ({
  permission,
  types,
  open,
  onClose,
  onSave,
}) => {
  const formik: FormikProps<PermissionDialogForm> =
    useFormik<PermissionDialogForm>({
      initialValues: {
        firstName: "",
        lastName: "",
      },
      validationSchema: Yup.object({
        firstName: Yup.string().required(
          "Debe ingresar el nombre de la persona"
        ),
        lastName: Yup.string().required(
          "Debe ingresar el apellido de la persona"
        ),
      }),
      onSubmit: (formData) => {
        const { firstName, lastName } = formData;
        permission.firstName = firstName;
        permission.lastName = lastName;
        permission.typeId = currentType;

        onSave(permission);
      },
    });

  const [currentType, setCurrentType] = useState(0);

  useEffect(() => {
    Object.entries(permission).forEach((entry) => {
      const [key, value] = entry;
      formik.setFieldValue(key, value);
    });

    if (permission.typeId > 0) {
      setCurrentType(permission.typeId);
    } else {
      setCurrentType(types[0].id);
    }
  }, [permission, types]);

  const handleIputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    formik.setFieldValue(event.target.name, event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <h4>Permiso</h4>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              size="small"
              id="firstName"
              name="firstName"
              label="Nombre"
              value={formik.values.firstName}
              onChange={handleIputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              size="small"
              id="lastName"
              name="lastName"
              label="Apellido"
              value={formik.values.lastName}
              onChange={handleIputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="types"
              size="small"
              select
              label="Tipos"
              value={currentType}
              helperText="Seleccione el tipo de permiso"
              onChange={(event) => {
                setCurrentType(parseInt(event.target.value));
              }}
            >
              {types.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.id} - {type.description}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid container item direction="row" justifyContent="center" xs={6}>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Guardar
            </Button>
          </Grid>
          <Grid container item direction="row" justifyContent="center" xs={6}>
            <Button variant="outlined" color="error" onClick={onClose}>
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};
