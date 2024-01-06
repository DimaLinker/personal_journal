import "./App.css";
import { Button } from "./components/Button/Button.jsx";
import { JournalItem } from "./components/JournalItem/JournalItem.jsx";
import { CardButton } from "./components/CardButton/CardButton.jsx";
import { LeftPanel } from "./components/Layout/LeftPanel/LeftPanel.jsx";
import { Body } from "./components/Layout/Body/Body.jsx";
import { Header } from "./components/Header/Header.jsx";
import { JournalList } from "./components/JournalList/JournalList.jsx";
import { JournalAddButton } from "./components/JournalAddButton/JournalAddButton.jsx";
import { useState } from "react";
import { JournalForm } from "./components/JournalForm/JournalForm.jsx";

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
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
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
        </JournalList>
      </LeftPanel>
      <Body>
        {/*<Button />*/}
        <JournalForm />
      </Body>
    </div>
  );
}

export default App;
