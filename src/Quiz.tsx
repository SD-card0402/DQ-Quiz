import styles from "./App.module.css";
import type { Question } from "./questions";

type QuizProps = {
    current: Question;
    index: number;
    total: number;
    score: number;
    message: string;
    isAnswered: boolean;
    onAnswer: (choice: string) => void;
};

function Quiz({
    current,
    index,
    total,
    score,
    message,
    isAnswered,
    onAnswer,
}: QuizProps) {

    return (
        <div className={styles.screen}>
            <div className={styles.container}>
                <h1>DQモンスタークイズ</h1>
                <h2>問題 {index + 1} / {total}</h2>
                <img src={current.image} alt="キャラクター"
                    className={styles.character}
                />
                <div className={styles.buttons}>
                    {current.choices.map((choice) => (
                        <button
                            key={choice}
                            onClick={() => onAnswer(choice)}
                            disabled={isAnswered}
                        >
                            {choice}
                        </button>
                    ))}
                </div>
                <h2 className={styles.message}>{message}</h2>
                <h3>スコア：{score}</h3>
            </div>
        </div>
    );
}

export default Quiz;