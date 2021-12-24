import React from "react";
import {Quiz} from "../common/models/quiz";
import {Navigate, useLocation, useNavigate} from "react-router-dom";

function TakeQuiz() {

    const location = useLocation();
    const {quiz} = location.state as {quiz: Quiz} || { quiz: undefined };

    return (
        (!quiz) ? <Navigate to="/dashboard"/> :
        <>
            <h1>Name: {quiz.quizName}</h1>
            {
                quiz.quizQuestions.map((question, idx) => {

                    return (
                        <div key={idx}>
                            <br/>
                            <div>Question: {question.questionText}</div>
                            <br/>
                            <div><input type="radio" name={question.questionId} value="a"/>{question.answers['a']}</div>
                            <div><input type="radio" name={question.questionId} value="b"/>{question.answers['b']}</div>
                            <div><input type="radio" name={question.questionId} value="c"/>{question.answers['c']}</div>
                            <div><input type="radio" name={question.questionId} value="d"/>{question.answers['d']}</div>
                            <br/>
                            {(idx == quiz!.quizQuestions.length - 1) ? <></> : <hr/> }
                        </div>
                    )
                })
            }
        </>
    );
}

export default TakeQuiz;
