export type QuizData = {
  image: string;
  answer: string;
  choices: string[];
};


export const quizData: QuizData[] = [
    {
    image: "/assets/slime.png",
    answer: "スライム",
    choices: ["スライム", "ネコ", "ウサギ", "キツネ"],
    },
    {
    image: "/assets/king.png",
    answer: "キングスライム",
    choices: ["キングスライム", "スライム", "ネコ", "ウサギ"],
    },
    {
    image: "/assets/elephant.png",
    answer: "ゾウ",
    choices: ["キリン", "サイ", "ゾウ", "カバ"],
    },
];