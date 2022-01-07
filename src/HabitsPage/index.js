import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import HabitsContext from "../contexts/habitsContext";
import UserContext from "../contexts/userContext";
import HabitCreation from "./HabitCreation";
import Header from "../Header";
import Habit from "./Habit";
import Footer from "../Footer";
import getHabits from "../scripts/getHabits";

export default function HabitsPage() {
    const noHabitText = `Você não tem nenhum hábito\n cadastrado ainda. Adicione um hábito\n para começar a trackear!`;
    const { userData } = useContext(UserContext);
    const { arrHabits, setArrHabits} = useContext(HabitsContext);
    const [showCreationMenu, setShowCreationMenu] = useState(false);

    useEffect(() => getHabits(userData, arrHabits, setArrHabits), []);

    return (
        <>
            <Header />
            <Container>

                <HeadBar>
                    <span>
                        Meus hábitos
                    </span>
                    <AddHabit onClick={() => setShowCreationMenu(!showCreationMenu)}>+</AddHabit>
                </HeadBar>

                {showCreationMenu && <HabitCreation getHabits={getHabits} setShowCreationMenu={setShowCreationMenu}/>}

                {arrHabits.length !== 0 
                    ? <Habits>
                            {arrHabits.map( (elem, index) => <Habit key={index} info={elem}/>)}
                        </Habits>
                    : ''
                }
                {arrHabits.length === 0
                    ? <NoHabit>
                            {noHabitText}
                        </NoHabit>
                    : ''
                }
                

            </Container>
            <Footer/>
        </>
    );
};

const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    padding: 92px 17px 101px 17px;
    background-color: #E5E5E5;

`;

const HeadBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
        font-family: 'Lexend Deca';
        font-size: 23px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color: #126BA5;
    }
`;

const AddHabit = styled.button`
    width: 40px;
    height: 35px;
    border: none;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 4.64px;
    font-family: 'Lexend Deca';
    font-size: 27px;
    font-weight: 400;
`;

const NoHabit = styled.span`
    font-family: 'Lexend Deca';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    color: #666666;
`;

const Habits = styled.div`
    gap: 10px;
    width: 100%;
`;