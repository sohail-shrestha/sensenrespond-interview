import React, { useState } from "react";

type InputBoxProps = {
  onTextChange: (text: string) => void;
};

const InputBox: React.FC<InputBoxProps> = ({ onTextChange }) => {
  const [text, setText] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTextChange(event.target.value);
    setText(event.target.value);
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button>Use AI</button>
    </div>
  );
};

export { InputBox };
