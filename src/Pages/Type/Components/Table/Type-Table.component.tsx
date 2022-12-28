import { TypeEntity } from "../../../../Core/Microservices/Type/Models/Type.entity";
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

type TypeTableComponentProps = {
  types: TypeEntity[];
  selectType: (id: number) => void;
  deleteType: (id: number) => void;
};

export const TypeTableComponent: React.FC<TypeTableComponentProps> = ({
  types,
  selectType,
  deleteType,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell size="small"></TableCell>
            <TableCell size="medium" align="right">Descripción</TableCell>
            <TableCell size="small" align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {types.map((type) => (
            <TableRow
              key={type.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell size="small" component="th" scope="row">
                {type.id}
              </TableCell>
              <TableCell size="medium" align="right">{type.description}</TableCell>
              <TableCell size="small" align="center">
                <IconButton aria-label="delete" color="error" onClick={()=>{deleteType(type.id)}}>
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="search" color="primary" onClick={()=>{selectType(type.id)}}>
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
