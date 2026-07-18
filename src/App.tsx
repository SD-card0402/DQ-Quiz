import { useState } from "react";

import "./App.css";

import Home from "./Home";
import Quiz from "./Quiz";
import Result from "./Result";

import {
    Question,
    questions,
} from "./questions";

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

    switch (screen) {

        case "home":

            return (
                <Home
                    onStart={startGame}
                />
            );

        case "result":

            return (
                <Result
                    score={score}
                    total={gameQuestions.length}
                    onRestart={restartGame}
                />
            );

        default:

            return (
                <Quiz
                    current={current}
                    index={index}
                    total={gameQuestions.length}
                    score={score}
                    message={message}
                    isAnswered={isAnswered}
                    onAnswer={checkAnswer}
                />
            );

    }

}

export default App;