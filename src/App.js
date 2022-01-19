import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card.js";
import { Header } from "./components/Header.js";
import { Score } from "./components/Score";

const App = () => {
  const [cards, setCards] = useState([
    "月",
    "日",
    "人",
    "火",
    "水",
    "木",
    "土",
    "川",
    "女",
    "男",
    "子",
    "母",
    "父",
    "金",
    "空",
    "大",
  ]);
  const [answers, setAnswers] = useState([]);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    setCards(shuffleCards());
  }, [answers]);

  useEffect(() => {
    if (answers.length > maxScore) {
      setMaxScore(answers.length);
    }
  }, [answers]);

  const addAnswer = (ans) => {
    if (!answers.includes(ans)) {
      setAnswers([...answers, ans]);
    } else {
      clearAnswers();
    }
  };

  const clearAnswers = () => {
    setAnswers([]);
  };

  const shuffleCards = () => {
    let shuffledArr = cards.slice();
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
  };

  const populateCards = cards.map((card, i) => (
    <Card content={card} key={i} onClick={addAnswer}></Card>
  ));

  return (
    <div className="App">
      <Header></Header>
      <Score current={answers.length} max={maxScore}></Score>
      <div className="cards-container">{populateCards}</div>
    </div>
  );
};

export default App;
