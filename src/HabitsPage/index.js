import Header from "../Header";
import styled from "styled-components";
import HabitCreation from "./HabitCreation";
import Habit from "./Habit";
import Footer from "../Footer";

export default function HabitsPage() {
    const noHabitText = `Você não tem nenhum hábito\n cadastrado ainda. Adicione um hábito\n para começar a trackear!`;
    const habitsArr = ['Ler', 'dormir', 'fazer nada'];

    return (
        <>
            <Header />
            <Container>

                <HeadBar>
                    <span>
                        Meus hábitos
                    </span>
                    <AddHabit>+</AddHabit>
                </HeadBar>

                <HabitCreation/>

                <Habits>
                    {habitsArr.map( (elem, index) => <Habit key={index} info={elem}/>)}
                </Habits>

                <NoHabit>
                    {noHabitText}
                </NoHabit>

            </Container>
            <Footer/>
        </>
    );
};

const Container = styled.div`
    padding: 92px 17px;

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