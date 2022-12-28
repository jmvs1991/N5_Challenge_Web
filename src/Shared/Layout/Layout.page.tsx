import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import React from "react";
import { NavLink } from "react-router-dom";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit">
              <NavLink to="permission">Permisos</NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to="type">Tipos</NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};
