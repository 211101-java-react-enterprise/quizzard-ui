import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginComponent from "./auth/LoginComponent";
import RegisterComponent from "./auth/RegisterComponent";
import DashboardComponent from "./core/DashboardComponent";
import NavbarComponent from "./common/components/NavbarComponent";
import {Principal} from "./common/models/principal";

function App() {

    const [authUser, setAuthUser] = useState(undefined as Principal | undefined);

    return (
        <>
            <NavbarComponent currentUser={authUser} setCurrentUser={setAuthUser} />
            <Routes>
                <Route path="/login" element={<LoginComponent currentUser={authUser} setCurrentUser={setAuthUser} />}/>
                <Route path="/register" element={<RegisterComponent currentUser={authUser} />}/>
                <Route path="/dashboard" element={<DashboardComponent currentUser={authUser} />}/>
            </Routes>
        </>
    );
}

export default App;
