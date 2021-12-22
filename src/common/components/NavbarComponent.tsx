import React from 'react'
import {AppBar, List, ListItem, ListItemText, Toolbar, Typography} from "@material-ui/core";
import {Principal} from "../models/principal";
import {useNavigate} from "react-router-dom";
import {logout} from "../services/auth-service";

interface INavbarProps {
    currentUser: Principal | undefined,
    setCurrentUser: (nextUser: Principal | undefined) => void
}

function NavbarComponent(props: INavbarProps) {

    const navigate = useNavigate();

    async function doLogout() {
        await logout(props.setCurrentUser);
    }

    function goTo(route: string) {
        navigate(route);
    }

    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <Typography variant="h5" color="inherit">
                    <List component="nav">
                        <ListItem component="div">
                            <Typography variant="h5" color="inherit">Quizzard</Typography>
                                {
                                    props.currentUser
                                    ?
                                    <>
                                    <ListItemText inset>
                                        <Typography variant="h6" color="inherit" onClick={() => goTo("/dashboard")}>Dashboard</Typography>
                                    </ListItemText>
                                    <ListItemText inset>
                                        <Typography variant="h6" color="inherit" onClick={doLogout}>Logout</Typography>
                                    </ListItemText>
                                    </>
                                    :
                                    <>
                                        <ListItemText inset>
                                            <Typography variant="h6" color="inherit"onClick={() => goTo("/login")}>Login</Typography>
                                        </ListItemText>
                                        <ListItemText inset>
                                            <Typography variant="h6" color="inherit" onClick={() => goTo("/register")}>Register</Typography>
                                        </ListItemText>
                                    </>
                                }
                        </ListItem>
                    </List>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavbarComponent;
