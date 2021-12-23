import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./core/Dashboard";
import Navbar from "./common/components/Navbar";
import {Principal} from "./common/models/principal";
import TakeQuiz from "./quiz/TakeQuiz";
import QuizOverview from "./quiz/QuizOverview";

function App() {

    const [authUser, setAuthUser] = useState(undefined as Principal | undefined);

    return (
        <>
            <Navbar currentUser={authUser} setCurrentUser={setAuthUser} />
            <Routes>
                <Route path="/login" element={<Login currentUser={authUser} setCurrentUser={setAuthUser} />} />
                <Route path="/register" element={<Register currentUser={authUser} />} />
                <Route path="/dashboard" element={<Dashboard currentUser={authUser} />} />
                <Route path="/take-quiz" element={<TakeQuiz />} />
                <Route path="/about-quiz" element={<QuizOverview />} />
            </Routes>
        </>
    );
}

export default App;
