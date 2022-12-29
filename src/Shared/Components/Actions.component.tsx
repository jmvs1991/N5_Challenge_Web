import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type ActionsComponentProps = {
  onClick: () => void;
};

export const ActionsComponent: React.FC<ActionsComponentProps> = ({
  onClick,
}) => {
  return (
    <Fab color="primary" aria-label="add" onClick={onClick}>
      <AddIcon />
    </Fab>
  );
};
