import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Grid, Typography } from "@mui/material";
import React from "react";

type EmailBoxProps = {
  left?: string;
  title: string;
  time: string;
  content: string;
  body?: string;
};

const EmailBox: React.FC<EmailBoxProps> = ({
  left,
  title,
  time,
  content,
  body,
}) => {
  return (
    <>
      <Grid container display='flex'flexDirection='row' width='100%' marginTop='8px'>
        <Grid
        marginTop='4px'
          style={{
            backgroundColor: "#4e76ed",
            width: "30px",
            height: "30px",
            padding: "8px",
            display: "flex",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "40px"

          }}
        >
          {left ? left : <PersonOutlineOutlinedIcon fontSize="small" />}
        </Grid>
        <Grid width='80%' marginLeft='16px' >
          <Grid container display='flex'  flexDirection='row' width='100%' justifyContent='space-between' >
            <Typography variant="h6" >{title}</Typography>
            <Typography variant="h6"  >{time}</Typography>
          </Grid>
          <Grid style={{ overflow: "clip", textOverflow: "ellipsis" }}>
            <Typography variant="h6" height={70} width="100%">
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
