import {
  Button,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type InputBoxProps = {
  onTextChange: (text: string) => void;
  prefix?: string;
};

const InputBox: React.FC<InputBoxProps> = ({ onTextChange, prefix }) => {
  const [text, setText] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTextChange(event.target.value);
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <OutlinedInput
          fullWidth
          multiline
          maxRows="2"
          value={text}
          onChange={onChange}
          size="small"
          startAdornment={
            prefix ? (
              <InputAdornment position="start">
                <Typography variant="body1" color={"#313232"}>
                  {prefix}
                </Typography>
              </InputAdornment>
            ) : (
              <></>
            )
          }
        />
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="outlined"
          style={{
            color: "#242524",
            borderColor: "#dbdcde",
            borderRadius: "16px",
            marginTop: "8px",
            marginBottom: "8px",
          }}
        >
          <Typography variant="body1">
            <b>Use AI</b>
          </Typography>
        </Button>
      </div>
    </>
  );
};

export { InputBox };
