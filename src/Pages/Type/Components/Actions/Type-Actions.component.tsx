import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type TypeActionsComponentProps = {
  addType: () => void;
};

export const TypeActionsComponent: React.FC<TypeActionsComponentProps> = ({
  addType,
}) => {
  return (
    <Fab color="primary" aria-label="add" onClick={addType}>
      <AddIcon />
    </Fab>
  );
};
