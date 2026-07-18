type ResultProps = {
    score: number;
    total: number;
    onRestart: () => void;
};

function Result({
    score,
    total,
    onRestart,
}: ResultProps) {

    const rate = Math.round((score / total) * 100);

    return (
        <div className="result">

            <h1>ゲーム終了！</h1>

            <h2>スコア</h2>

            <h1>{score} / {total}</h1>

            <h2>正答率</h2>

            <h1>{rate}%</h1>

            <button
                className="restartButton"
                onClick={onRestart}
            >
                もう一度遊ぶ
            </button>

        </div>
    );
}

export default Result;