import { useState } from "react";

import styles from "./App.module.css";

import Home from "./Home";
import Quiz from "./Quiz";
import Result from "./Result";

import { questions } from "./questions";
import type { Question } from "./questions";

const shuffleArray = (array: Question[]) =>
    [...array].sort(() => Math.random() - 0.5);

function App() {

    const [screen, setScreen] =
        useState<"home" | "game" | "result">("home");

    const [gameQuestions, setGameQuestions] =
        useState<Question[]>(shuffleArray(questions));

    const [index, setIndex] = useState(0);

    const [score, setScore] = useState(0);

    const [message, setMessage] = useState("");

    const [isAnswered, setIsAnswered] =
        useState(false);

    const current = gameQuestions[index];

    const startGame = () => {

        setGameQuestions(
            shuffleArray(questions)
        );

        setIndex(0);

        setScore(0);

        setMessage("");

        setIsAnswered(false);

        setScreen("game");

    };

    const restartGame = () => {

        setScreen("home");

    };

    const checkAnswer = (choice: string) => {

        if (isAnswered) return;

        setIsAnswered(true);

        const correct =
            choice === current.answer;

        if (correct) {

            setScore((prev) => prev + 1);

            setMessage("〇 正解！");

        } else {

            setMessage(
                `× 不正解！（正解：${current.answer}）`
            );

        }

        setTimeout(() => {

            if (
                index <
                gameQuestions.length - 1
            ) {

                setIndex((prev) => prev + 1);

                setMessage("");

                setIsAnswered(false);

            } else {

                setScreen("result");

            }

        }, 1200);

    };

    return (
        <div className={styles.app}>
            {screen === "home" ? (
                <Home onStart={startGame} />
            ) : screen === "result" ? (
                <Result
                    score={score}
                    total={gameQuestions.length}
                    onRestart={restartGame}
                />
            ) : (
                <Quiz
                    current={current}
                    index={index}
                    total={gameQuestions.length}
                    score={score}
                    message={message}
                    isAnswered={isAnswered}
                    onAnswer={checkAnswer}
                />
            )}
        </div>
    );

}

export default App;