import React from "react";
import {Quiz} from "../common/models/quiz";
import {Navigate, useLocation, useNavigate} from "react-router-dom";

function TakeQuiz() {

    const location = useLocation();
    const {quiz} = location.state as {quiz: Quiz} || { quiz: undefined };
    const navigate = useNavigate();

    return (
        (!quiz) ? <Navigate to="/dashboard"/> :
        <>
            {console.log(quiz)}
            <h1>Name: {quiz.quizName}</h1>
            {
                quiz.quizQuestions.map((question, idx) => {

                    return (
                        <div key={idx}>
                            <br/>
                            <div>Question: {question.questionText}</div>
                            <br/>
                            {/*@ts-ignore*/}
                            <div><input type="radio" value="a"/>{question.answers['a']}</div>
                            {/*@ts-ignore*/}
                            <div><input type="radio" value="b"/>{question.answers['b']}</div>
                            {/*@ts-ignore*/}
                            <div><input type="radio" value="c"/>{question.answers['c']}</div>
                            {/*@ts-ignore*/}
                            <div><input type="radio" value="d"/>{question.answers['d']}</div>
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
