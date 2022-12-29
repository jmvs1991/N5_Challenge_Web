import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { PermissionEntity } from "../../../../Core/Microservices/Permission/Models/Permission.entity";

type PermissionTableComponentProps = {
  permissions: PermissionEntity[];
  selectPermission: (id: number) => void;
  deletePermission: (id: number) => void;
};

export const PermissionTableComponent: React.FC<
  PermissionTableComponentProps
> = ({ permissions, selectPermission, deletePermission }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell size="small"></TableCell>
            <TableCell size="medium" align="right">
              Nombre
            </TableCell>
            <TableCell size="medium" align="right">
              Fecha
            </TableCell>
            <TableCell size="small" align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {permissions.map((permission) => (
            <TableRow
              key={permission.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell size="small" component="th" scope="row">
                {permission.id}
              </TableCell>
              <TableCell size="medium" align="right">
                {permission.firstName} {permission.lastName}
              </TableCell>
              <TableCell size="medium" align="right">
                {permission.dateOfPermission.toString()}
              </TableCell>
              <TableCell size="small" align="center">
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => {
                    deletePermission(permission.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  aria-label="search"
                  color="primary"
                  onClick={() => {
                    selectPermission(permission.id);
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
