import "./App.css";
import { Button } from "./components/Button/Button.jsx";
import { JournalItem } from "./components/JournalItem/JournalItem.jsx";
import { CardButton } from "./components/CardButton/CardButton.jsx";

function App() {
  const data = [
    {
      title: "Vorbereitung zur React",
      text: "Heute habe ich den ganzen Tag damit verbracht...",
      date: new Date(),
    },

    {
      title: "Wanderung zu den Bergen",
      text: "Ich dachte, es wäre viel Zeit...",
      date: new Date(),
    },
  ];

  return (
    <>
      <Button />
      <CardButton>Hinzufügen</CardButton>
      <CardButton>
        <JournalItem
          title={data[0].title}
          text={data[0].text}
          date={data[0].date}
        />
      </CardButton>
      <CardButton>
        <JournalItem
          title={data[1].title}
          text={data[1].text}
          date={data[1].date}
        />
      </CardButton>
    </>
  );
}

export default App;
