import "./Button.css";
import { useState } from "react";
export const Button = () => {
  const [text, setText] = useState("Ausgabe");
  const click = () => {
    setText("zumachen");
  };
  return (
    <>
      <button className="button accent" onClick={click}>
        {text}
      </button>
    </>
  );
};
