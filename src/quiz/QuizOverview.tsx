import {Quiz} from "../common/models/quiz";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import React from "react";


function QuizOverview() {

    const location = useLocation();
    const {quiz} = location.state as {quiz: Quiz} || { quiz: undefined };
    const navigate = useNavigate();

    return (
        (!quiz) ? <>{console.log('nothing here')} <Navigate to="/dashboard"/></> :
        <>
            <h1>{quiz.quizName}</h1>
            <button onClick={() => navigate("/take-quiz", {state: { quiz: quiz }})}>Take Quiz</button>
            <button onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}

export default QuizOverview;
