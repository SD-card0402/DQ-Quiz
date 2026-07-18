import slime from "./assets/slime.png";
import king from "./assets/king.png";

export type Question = {
    image: string;
    answer: string;
    choices: string[];
};

export const questions: Question[] = [
    {
        image: slime,
        answer: "スライム",
        choices: ["スライム", "ルイージ", "カービィ", "ピカチュウ"],
    },
    {
        image: king,
        answer: "キング",
        choices: ["キング", "ルイージ", "カービィ", "ピカチュウ"],
    },
];