import styled from "styled-components";
import WideInput from "../../styles/wideInput";
import DaysOfTheWeek from "../DaysOfTheWeek";

export default function HabitCreation() {

    return (
        <Container>

            <WideInput placeholder="nome do hábito"/>

            <DaysOfTheWeek/>

            <Buttons>
                <Cancel >Cancelar</Cancel >
                <Save >Salvar</Save>
            </Buttons>
        </Container>
    );

};

const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    height: 180px;
    padding: 18px;
`;

const Buttons = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: right;
    align-items: center;
`;

const Cancel = styled.button`
    height: 20px;
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-size: 15.98px;
    margin-right: 23px;
    border: none;
    background-color: #fff;
`;

const Save = styled.button`
    height: 100%;
    width: 84px;
    background-color: #52B6FF;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    font-family: 'Lexend Deca';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    border: none;
`;
