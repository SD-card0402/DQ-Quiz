import { Question } from "./questions";

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
        <div className="container">

            <h1>DQモンスタークイズ</h1>

            <h2>
                問題 {index + 1} / {total}
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
                        onClick={() => onAnswer(choice)}
                        disabled={isAnswered}
                    >
                        {choice}
                    </button>

                ))}

            </div>

            <h2 className="message">
                {message}
            </h2>

            <h3>
                スコア：{score}
            </h3>

        </div>
    );
}

export default Quiz;