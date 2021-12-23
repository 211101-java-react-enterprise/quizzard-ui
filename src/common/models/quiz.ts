import {Question} from "./question";

export class Quiz {

    id: string;
    quizName: string;
    quizQuestions: Question[];
    quizPublic: boolean;
    quizPublished: boolean;

    constructor(id: string, name: string, questions: Question[], isPublic: boolean, isPublished: boolean) {
        this.id = id;
        this.quizName = name;
        this.quizQuestions = questions;
        this.quizPublic = isPublic;
        this.quizPublished = isPublished;
    }

}