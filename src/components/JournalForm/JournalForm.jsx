import "./JournalForm.css";
import { Button } from "../Button/Button.jsx";

export const JournalForm = ({ onSubmit }) => {
  const addJournalItem = (e) => {
    e.preventDefault();
    const formDate = new FormData(e.target);
    const fromProps = Object.fromEntries(formDate);
    onSubmit(fromProps);
  };
  return (
    <>
      <form className="journal-form" onSubmit={addJournalItem}>
        <input type="text" name="title" />
        <input type="date" name="date" />
        <input type="text" name="tag" />
        <textarea name="text" id="" cols="30" rows="10"></textarea>
        <Button
          text="Speichern"
          onClick={() => {
            console.log(...Button);
          }}
        />
      </form>
    </>
  );
};
