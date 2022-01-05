import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitsPage from "../HabitsPage";
import HistoryPage from "../HistoryPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import TodayPage from "../TodayPage";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}></Route>
                <Route path="/cadastro" element={<SignUpPage />}></Route>
                <Route path="/habitos" element={<HabitsPage />} ></Route>
                <Route path="/hoje" element={<TodayPage />} ></Route>
                <Route path="/historico" element={<HistoryPage />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}


