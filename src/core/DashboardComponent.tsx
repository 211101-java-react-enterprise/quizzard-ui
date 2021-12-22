import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import {Principal} from "../common/models/principal";
import {getQuizzes} from "../common/services/quiz-service";

interface IDashboardProps {
    currentUser: Principal | undefined;
}

function DashboardComponent(props: IDashboardProps) {

    useEffect(() => {
        if (props.currentUser) {
            console.log(props.currentUser)
            getQuizzes(props.currentUser.token).then(data => console.log(data));
        }
    });

    return (
        !props.currentUser ? <Navigate to="/login"/> :
        <h1>Welcome, {props.currentUser.username}!</h1>
    );
}

export default DashboardComponent;
