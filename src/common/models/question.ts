export class Question {

    questionId: string;
    questionText: string;
    answers: Map<string, string>;
    correctAnswer: string;

    constructor(id: string, questionText: string, answers: Map<string, string>, correctAnswer: string) {
        this.questionId = id;
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

}