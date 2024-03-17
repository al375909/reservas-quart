import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom"; import SignIn from './pages/signIn/SingIn';
import { Register } from './pages/register/Register';
import App from './App';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/sign-in" element={<SignIn />} />
                <Route exact path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;