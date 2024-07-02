import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { InputBox } from "../../../components";
import { setA, setB } from "../slice";

const HomeLeftComponent: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Grid container>
        <CheckCircleIcon color="success" />
        <Grid item>
          <Typography variant="h5">Subject</Typography>
          <Typography variant="subtitle2">
            Add a subject line for this campaign.
          </Typography>

          <Grid container columnGap={1} style={{ marginTop: "16px" }}>
            <Typography variant="body2">
              <b>Subject line </b>
            </Typography>
            <Typography color="red">* </Typography>
            <HelpOutlineOutlinedIcon fontSize="small" htmlColor="#726cc8" />
          </Grid>

          <Grid>
            <InputBox
              prefix="A"
              onTextChange={(text: string) => {
                dispatch(setA(text));
              }}
            />
            <InputBox
              prefix="B"
              onTextChange={(text: string) => {
                dispatch(setB(text));
              }}
            />
            <InputBox
              onTextChange={function (text: string): void {
                //DO NOTHING
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export { HomeLeftComponent };
