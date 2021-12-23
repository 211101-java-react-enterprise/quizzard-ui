import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import {Principal} from "../common/models/principal";
import {getQuizzes} from "../common/services/quiz-service";
import {Quiz} from "../common/models/quiz";
import TakeQuiz from "../quiz/TakeQuiz";
import QuizCard from "../quiz/QuizCard";
import {Grid, makeStyles, Typography} from "@material-ui/core";

interface IDashboardProps {
    currentUser: Principal | undefined;
}

const useStyles = makeStyles({
    dashboard: {
        justifyContent: "left",
        paddingTop: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem"
    }
});


function Dashboard(props: IDashboardProps) {

    const classes = useStyles();
    const [quizzes, setQuizzes] = useState([] as Quiz[]);

    useEffect(() => {
        if (props.currentUser && quizzes.length == 0) {
            getQuizzes(props.currentUser.token)
                .then(data => setQuizzes(data));
        }
    });

    return (
        !props.currentUser ? <Navigate to="/login"/> :
        <div className={classes.dashboard}>
            <Typography variant="h4">Welcome, {props.currentUser.username}!</Typography>
            <br/><br/>
            <hr/>
            <Typography variant="subtitle1">Recommended for you</Typography>
            <Grid container>
                {quizzes.map((quiz, idx) => <Grid key={idx} item xs={4}><QuizCard quiz={quiz!} /></Grid>)}
            </Grid>
            <br/>
            <hr/>
            <div>More to come!</div>
        </div>
    );
}

export default Dashboard;
