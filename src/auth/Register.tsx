import React, {useState} from "react";
import {Principal} from "../common/models/principal";
import {Button, FormControl, Input, InputLabel, makeStyles, Typography} from "@material-ui/core";
import {Navigate, useNavigate} from "react-router-dom";
import ErrorMessage from "../common/components/ErrorMessage";
import {registerUserAccount} from "../common/services/auth-service";

interface IRegisterProps {
    currentUser: Principal | undefined
}

const useStyles = makeStyles({
    registerContainer: {
        justifyContent: "center",
        marginLeft: "32rem",
        marginTop: "2rem",
        padding: 20,
        width: "25%"
    }
});

function Register(props: IRegisterProps) {

    const classes = useStyles();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    let handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    let isFormValid = () => {
        for (let field in formData) {
            // @ts-ignore
            if (!formData[field]) {
                return false;
            }
        }
        return true;
    }

    let register = async () => {

        if (!isFormValid()) {
            setErrorMessage('You need to complete the registration form!');
            return;
        }

        try {
            await registerUserAccount(formData);
            navigate('/confirmation');
        } catch (e: any) {
            setErrorMessage(e.message);
        }
    }

    return (

        props.currentUser ? <Navigate to="/dashboard"/> :

            <div id="register-component" className={classes.registerContainer}>
                <Typography align="center" variant="h4">Register for Quizzard!</Typography>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <Input
                        onChange={handleChange}
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                    />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <Input
                        onChange={handleChange}
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                    />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input
                        onChange={handleChange}
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter your email address"
                    />
                </FormControl>


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
                        onChange={handleChange}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </FormControl>

                <br/><br/>

                <Button
                    id="register-button"
                    onClick={register}
                    variant="contained"
                    color="primary"
                    size="medium">Register</Button>

                <br/><br/>

                { errorMessage ? <ErrorMessage errorMessage={errorMessage}/> : <></> }

            </div>

    );
}

export default Register;
