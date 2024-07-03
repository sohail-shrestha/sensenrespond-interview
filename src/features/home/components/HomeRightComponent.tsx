import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Mobile } from "./Mobile";

const HomeRightComponent: React.FC = () => {
  return (
    <Grid container>
      <Mobile />
      <Grid item marginTop="16px" width="90%">
        <Typography variant="body1">
          Actual email previewmay vary depending on the email client
        </Typography>

        <Grid
          container
          justifyContent="flex-end"
          flexDirection="row"
          display="flex"
          marginTop="4px"
          width="100%"
        >
          <Button variant="text" style={{ marginRight: "4px" }}>
            Cancel
          </Button>
          <Button variant="contained" style={{ borderRadius: "20px" }} disabled>
            Save
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { HomeRightComponent };
