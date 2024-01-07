import "./App.css";
import { JournalItem } from "./components/JournalItem/JournalItem.jsx";
import { CardButton } from "./components/CardButton/CardButton.jsx";
import { LeftPanel } from "./components/Layout/LeftPanel/LeftPanel.jsx";
import { Body } from "./components/Layout/Body/Body.jsx";
import { Header } from "./components/Header/Header.jsx";
import { JournalList } from "./components/JournalList/JournalList.jsx";
import { JournalAddButton } from "./components/JournalAddButton/JournalAddButton.jsx";
import { JournalForm } from "./components/JournalForm/JournalForm.jsx";
import { useState } from "react";

const INITIAL_DATA = [
  // {
  //   id: 1,
  //   title: "Vorbereitung zur React",
  //   text: "Heute habe ich den ganzen Tag damit verbracht...",
  //   date: new Date(),
  // },
  //
  // {
  //   id: 2,
  //   title: "Wanderung zu den Bergen",
  //   text: "Ich dachte, es wäre viel Zeit...",
  //   date: new Date(),
  // },
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItems = (item) => {
    setItems((oldItem) => [
      ...oldItem,
      {
        title: item.title,
        text: item.text,
        date: new Date(item.date),
        id: Math.max(...(oldItem.map((i) => i.id) + 1)),
      },
    ]);
  };

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {items.length === 0 ? (
            <p>Noch nicht's eingetragen!!</p>
          ) : (
            items.sort(sortItems).map((el) => (
              <CardButton key={el.id}>
                <JournalItem title={el.title} text={el.text} date={el.date} />
              </CardButton>
            ))
          )}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItems} />
      </Body>
    </div>
  );
}

export default App;
