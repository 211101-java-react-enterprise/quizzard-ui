import React from "react";
import {Alert} from "@material-ui/lab";

interface IErrorMessageProps {
    errorMessage: string
}

function ErrorMessage(props: IErrorMessageProps) {
    return (
        <Alert severity="error">{props.errorMessage}</Alert>
    );
}

export default ErrorMessage;
