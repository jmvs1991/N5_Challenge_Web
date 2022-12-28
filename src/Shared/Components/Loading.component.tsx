import { Backdrop, CircularProgress } from "@mui/material";

type LoadingComponentProps = {
  show: boolean;
};

export const LoadingComponent: React.FC<LoadingComponentProps> = ({ show }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={show}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
