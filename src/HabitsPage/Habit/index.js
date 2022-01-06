import styled from "styled-components";
import DaysOfTheWeek from "../DaysOfTheWeek";

export default function Habit( {info} ) {
    const daysOfTheWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    return (
        <Container>
            <Title>{info}</Title>
            <Delete>
                <ion-icon name="trash-outline"></ion-icon>
            </Delete>
            <Days >
                {daysOfTheWeek.map(
                    (elem, index) => <Day key={index}>{elem}</Day>
                )}
            </Days>
        </Container>
    );
};

const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    position: relative;
    height: 91px;
    padding: 13px 15px;
    margin-bottom: 10px;
`;

const Title = styled.span`
    font-family: 'Lexend Deca';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
    margin-bottom: 8px;
`;

const Delete = styled.button`
    position: absolute;
    top: 11px;
    right: 11px;
    border: none;
    background-color: #fff;
`;

const Days = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 28px;
`;

const Day = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    text-align: center;
    color: #DBDBDB;
    background-color: #fff ;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.98px;
`;