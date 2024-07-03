import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Grid, Typography } from "@mui/material";
import React from "react";

type EmailBoxProps = {
  letfText?: string;
  title: string;
  time: string;
  content: string;
  body?: string;
};

const EmailBox: React.FC<EmailBoxProps> = ({
  letfText,
  title,
  time,
  content,
  body,
}) => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={1}
          style={{
            backgroundColor: "#4e76ed",
            width: "30px",
            height: "30px",
            padding: "8px",
            display: "flex",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "40%%",
          }}
        >
          {letfText ? letfText : <PersonOutlineOutlinedIcon fontSize="small" />}
        </Grid>
        <Grid xs={11}>
          <Grid container style={{ justifyContent: "space-between" }}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h6">{time}</Typography>
          </Grid>
          <Grid style={{ overflow: "clip", textOverflow: "ellipsis" }}>
            <Typography variant="h6" height={70} width="100vh">
              {content}
            </Typography>
          </Grid>
          <Typography variant="body2">{body}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export { EmailBox };
