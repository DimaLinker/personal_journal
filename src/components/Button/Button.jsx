import "./Button.css";
import { useState } from "react";
export const Button = ({ text, onClick }) => {
  return (
    <>
      <button className="button accent" onClick={onClick}>
        {text}
      </button>
    </>
  );
};
