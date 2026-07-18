import styles from "./App.module.css";

type HomeProps = {
    onStart: () => void;
};

function Home({ onStart }: HomeProps) {
    return (
        <div className={styles.home}>
            <div className={styles.homeWindow}>
                <h1 className={styles.gameTitle}>DQモンスタークイズ</h1>
                <p className={styles.gameText}>
                    モンスターの画像を見て<br />
                    正しい名前を選びましょう！
                </p>

                <button
                    className={styles.startButton}
                    onClick={onStart}
                >
                    ▶ はじめる
                </button>
            </div>
        </div>
    );
}

export default Home;