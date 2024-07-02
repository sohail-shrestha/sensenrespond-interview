import React from "react";
import { useDispatch } from "react-redux";
import { InputBox } from "../../../components";
import { setA, setB } from "../slice";

const HomeLeftComponent: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <>
      <h2>Subject</h2>
      <p>Add a subject line for this campaign.</p>

      <b>Subject line * ?</b>
      <InputBox onTextChange={ (text: string) => {
        dispatch(setA(text))
      } } />
      <InputBox onTextChange={ (text: string) => {
        dispatch(setB(text))
      } }  />
      <InputBox onTextChange={function (text: string): void {
        //DO NOTHING
      } } />
    </>
  );
};

export { HomeLeftComponent };
