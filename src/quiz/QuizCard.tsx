import React from 'react';
import {Button, Card, CardActions, CardContent, makeStyles, Typography} from "@material-ui/core";
import {Quiz} from "../common/models/quiz";
import {useNavigate} from "react-router-dom";

interface IQuizCardProps {
    quiz: Quiz;
}

const useStyles = makeStyles({
    quizCard: {
        justifyContent: "left",
        marginLeft: "1rem",
        width: "15rem"
    }
});

function QuizCard(props: IQuizCardProps) {

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Card className={classes.quizCard} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {props.quiz.quizName}
                </Typography>
                <Typography variant="body2">
                    Number of questions: {props.quiz.quizQuestions.length}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => navigate('/about-quiz', {state: { quiz: props.quiz }})}>Take Quiz!</Button>
            </CardActions>
        </Card>
    )
}

export default QuizCard;