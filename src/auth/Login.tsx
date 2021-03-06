import React, {SyntheticEvent, useState} from "react";
import {Principal} from "../common/models/principal";
import ErrorMessage from "../common/components/ErrorMessage";
import {Button, FormControl, Input, InputLabel, makeStyles, Typography} from "@material-ui/core";
import {Navigate} from "react-router-dom";
import {authenticate} from "../common/services/auth-service";

interface ILoginProps {
    currentUser: Principal | undefined,
    setCurrentUser: (nextUser: Principal | undefined) => void
}

const useStyles = makeStyles({
    loginContainer: {
        justifyContent: "center",
        marginLeft: "32rem",
        marginTop: "7rem",
        width: "25%"
    }
});

function Login(props: ILoginProps) {

    const classes = useStyles();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    let handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    let login = async (e: SyntheticEvent) => {

        if (e.type == 'keydown' && (e.nativeEvent as KeyboardEvent).code !== 'Enter') {
            return;
        }

        if (!formData.username || !formData.password) {
            setErrorMessage('You need to provide both a username and a password');
            return;
        }

        try {
            let principal = await authenticate({username: formData.username, password: formData.password});
            props.setCurrentUser(principal);
        } catch (e: any) {
            setErrorMessage(e);
        }
    }

    return (

        props.currentUser ? <Navigate to="/dashboard"/> :

            <div id="login-component" className={classes.loginContainer}>

                <Typography align="center" variant="h4">Log into Quizzard!</Typography>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input
                        onChange={handleChange}
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                    />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        onKeyDown={login}
                        onChange={handleChange}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </FormControl>

                <br/><br/>

                <Button
                    id="login-button"
                    onClick={login}
                    variant="contained"
                    color="primary"
                    size="medium">Login</Button>

                <br/><br/>

                { errorMessage ? <ErrorMessage errorMessage={errorMessage}/> : <></> }
            </div>

    );

}

export default Login;
