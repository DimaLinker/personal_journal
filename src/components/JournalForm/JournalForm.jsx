import "./JournalForm.css";
import { useState } from "react";
import { Button } from "../Button/Button.jsx";

export const JournalForm = () => {
  const [inputData, setInputData] = useState("");
  const inputChange = (e) => {
    console.log(e.target.value);
    console.log({ inputData });
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    const formDate = new FormData(e.target);
    const formProps = Object.fromEntries(formDate);
    console.log({ fromProps });
  };
  return (
    <>
      <form className="journal-form" onSubmit={addJournalItem}>
        <input type="text" name="title" />
        <input type="date" name="date" />
        <input
          type="text"
          name="tag"
          value={inputData}
          onChange={inputChange}
        />
        <textarea name="post" id="" cols="30" rows="10"></textarea>
        <Button
          text="Speichern"
          onClick={() => {
            console.log("Test");
          }}
        />
      </form>
    </>
  );
};
