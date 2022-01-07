import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/userContext.js";
import { useState } from "react";

import HabitsPage from "../HabitsPage";
import HistoryPage from "../HistoryPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import TodayPage from "../TodayPage";
import HabitsContext from "../contexts/habitsContext.js";

export default function App() {
    const [userData, setUserData] = useState({name: '', image: '', token: ''});
    const  [ arrHabits, setArrHabits] = useState([]);
    console.log(UserContext);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            <HabitsContext.Provider value={{ arrHabits, setArrHabits }}>
                <BrowserRouter>
                    <Routes>
                        
                            <Route path="/" element={<LoginPage />}></Route>
                            <Route path="/cadastro" element={<SignUpPage />}></Route>
                            <Route path="/habitos" element={<HabitsPage />} ></Route>
                            <Route path="/hoje" element={<TodayPage />} ></Route>
                            <Route path="/historico" element={<HistoryPage />} ></Route>
                        
                    </Routes>
                </BrowserRouter>
            </HabitsContext.Provider>
        </UserContext.Provider>
    );
}


