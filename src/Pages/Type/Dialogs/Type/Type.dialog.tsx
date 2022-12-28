import { Modal, Box, TextField, Grid, Button } from "@mui/material";
import { TypeEntity } from "../../../../Core/Microservices/Type/Models/Type.entity";
import * as Yup from "yup";
import { FormikProps, useFormik } from "formik";
import { useEffect } from "react";

type TypeDialogProps = {
  type: TypeEntity;
  open: boolean;
  onClose: () => void;
  onSave: (type: TypeEntity) => void;
};

type TypeDialogForm = {
  description: string;
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

export const TypeDialog: React.FC<TypeDialogProps> = ({
  type,
  open,
  onClose,
  onSave,
}) => {
  
  const formik: FormikProps<TypeDialogForm> = useFormik<TypeDialogForm>({
    initialValues: {
      description: "",
    },
    validationSchema: Yup.object({
      description: Yup.string().required("Debe agregar las descripción"),
    }),
    onSubmit: (formData) => {
      const { description } = formData;
      type.description = description;

      onSave(type);
    },
  });

  useEffect(()=> {
    formik.setFieldValue("description", type.description);
  }, [type])

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
            <h4>Tipo de permiso</h4>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              size="small"
              id="description"
              name="description"
              label="Descripción"
              value={formik.values.description}
              onChange={handleIputChange}
            />
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
