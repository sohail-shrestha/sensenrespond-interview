import React from "react";

type EmailBoxProps = {
  title: string;
  time: string;
  content: string;
};

const EmailBox: React.FC<EmailBoxProps> = ({ title, time, content }) => {
  return (
    <>
      <div>
        <b>{title}</b>
        <b>{time}</b>
      </div>
      <div>{content}</div>
    </>
  );
};

export { EmailBox };
