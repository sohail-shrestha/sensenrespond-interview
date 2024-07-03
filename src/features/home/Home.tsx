import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { HomeLeftComponent, HomeRightComponent } from "./components";

const Home: React.FC = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      style={{ backgroundColor: "#fefefc" }}
    >
      <Card>
        <CardContent >
          <Grid
            container
            display="flex"
            flexDirection="row"
            maxWidth="100%"
            maxHeight="100%"
            marginTop="2%"
            marginBottom="2%"
            marginLeft="4%"
            marginRight="4%"
            paddingBottom="4px"
            spacing='32'
          >
            <Grid item width='50%'>
              <HomeLeftComponent />
            </Grid>
            <Grid item width='50%'>
              <HomeRightComponent />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export { Home };
