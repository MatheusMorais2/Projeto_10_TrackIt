import { useContext, useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import Header from "../Header";
import HabitToday from "./HabitToday";
import Footer from "../Footer";

import getHabits from "../scripts/getHabits";
import getTodaysHabits from "../scripts/getTodaysHabits";

import UserContext from "../contexts/userContext";
import HabitsContext from "../contexts/habitsContext";
import TodaysHabitsContext from "../contexts/todaysHabitsContext";

export default function TodayPage() {
    require('dayjs/locale/pt-br');
    let dayOfTheWeek = dayjs().locale('pt-br').format('dddd, DD/MM');

    const { userData} = useContext(UserContext);
    const { arrHabits, setArrHabits } = useContext(HabitsContext);
    const { todaysHabits, setTodaysHabits } = useContext(TodaysHabitsContext);

    useEffect(() => getTodaysHabits(userData.token, setTodaysHabits), []);
    useEffect(() => getHabits(userData, arrHabits, setArrHabits), []);

    return (
            <>
                <Header />
                <Container>
                    <Date>{dayOfTheWeek}</Date>
                    <Status>Nenhum hábito concluído ainda</Status>
                    <Main>
                        {todaysHabits.map( (elem, index) => <HabitToday key={index} info={elem}/>)}
                    </Main>

                </Container>
                <Footer/>
            </>
    );
};

const Container = styled.div`
    background-color: #E5E5E5;
    padding: 98px 18px 0px 18px;
    width: 100vw;
    height: 100vh;
`;

const Date = styled.p`
    font-family: 'Lexend Deca';
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #126BA5;
`;

const Status = styled.p`
    font-family: 'Lexend Deca';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #BABABA;
    margin-bottom: 28px;
`;

const Main = styled.div`
    gap: 10px;
`;