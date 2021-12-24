export class Question {

    questionId: string;
    questionText: string;
    answers: {a: string, b: string, c: string, d: string};
    correctAnswer: string;

    constructor(id: string, questionText: string, answers: {a: string, b: string, c: string, d: string }, correctAnswer: string) {
        this.questionId = id;
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

}