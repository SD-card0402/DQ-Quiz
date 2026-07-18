import { useState } from "react";
import "./App.css";
import slime from "./assets/slime.png";
import king from "./assets/king.png";

// 問題データの型
type Question = {
  image: string;
  answer: string;
  choices: string[];
};

const questions: Question[] = [
  {
    image: slime,
    answer: "スライム",
    choices: ["スライム", "ルイージ", "カービィ", "ピカチュウ"],
  },
  {
    image: king,
    answer: "キング",
    choices: ["キング", "ルイージ", "カービィ", "ピカチュウ"],
  }
];

// 問題をシャッフル
const shuffleArray = (array: Question[]): Question[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

function App() {

  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [gameQuestions, setGameQuestions] = useState<Question[]>(
    shuffleArray(questions)
  );

  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const current = gameQuestions[index];

  const restartGame = () => {
    setGameQuestions(shuffleArray(questions));
    setIndex(0);
    setScore(0);
    setMessage("");
    setIsFinished(false);
    setIsAnswered(false);
};

  const checkAnswer = (choice: string) => {
    const correct = choice === current.answer;
    if (isAnswered) return;
    setIsAnswered(true);
    if (correct) {
      setScore((prev) => prev + 1);
      setMessage("〇 正解！");
    } else {
      setMessage(`× 不正解！（正解：${current.answer}）`);
    }

    setTimeout(() => {
      if (index < gameQuestions.length - 1) {
        setIndex((prev) => prev + 1);
        setMessage("");
        setIsAnswered(false);
      } else {
        const finalScore = score + (correct ? 1 : 0);

        setScore(finalScore);
        setIsFinished(true);
      }
    }, 1200);
  };
if (isFinished) {

    const rate = Math.round(
        (score / gameQuestions.length) * 100
    );

    return (

        <div className="result">

            <h1>ゲーム終了！</h1>

            <h2>
                スコア
            </h2>

            <h1>
                {score} / {gameQuestions.length}
            </h1>

            <h2>
                正答率
            </h2>

            <h1>
                {rate}%
            </h1>

            <button
                className="restartButton"
                onClick={restartGame}
            >
                もう一度遊ぶ
            </button>

        </div>

    );

  }
  return (
    <div className="container">
      <h1>キャラクター当てゲーム</h1>

      <h2>
        問題 {index + 1} / {gameQuestions.length}
      </h2>

      <img
        src={current.image}
        alt="キャラクター"
        className="character"
      />

      <div className="buttons">
        {current.choices.map((choice) => (
          <button
            key={choice}
          onClick={() => checkAnswer(choice)}
          disabled={isAnswered}
          >
            {choice}
          </button>
        ))}
      </div>

      <h2 className="message">{message}</h2>

      <h3>スコア：{score}</h3>
    </div>
  );
}
export default App;