import { Grid } from "@mui/material";
import React from "react";
import { HomeLeftComponent, HomeRightComponent } from "./components";

const Home: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <HomeLeftComponent />
      </Grid>
      <Grid item xs={6}>
        <HomeRightComponent />
      </Grid>
    </Grid>
  );
};

export { Home };
