type HomeProps = {
    onStart: () => void;
};

function Home({ onStart }: HomeProps) {
    return (
    <div className="home">
        <div className="home-window">

        <h1 className="game-title">
            DQモンスタークイズ
        </h1>

        <p className="game-text">
            モンスターの画像を見て
            <br />
            正しい名前を選びましょう！
        </p>

        <button
            className="startButton"
            onClick={onStart}
        >
            ▶ はじめる
        </button>

        </div>
    </div>
    );
}

export default Home;