import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import UserContext from "../../contexts/userContext.js";

export default function HabitToday( {info} ) {
    const { userData } = useContext(UserContext);
    const {currentSequence, done, highestSequence, id, name} = info;
    console.log(id);
    const [ isDone, setIsDone] = useState(done);

    let changeTextColor = false;
    currentSequence === highestSequence ? changeTextColor = true : changeTextColor = false;

    function handleClick() {
        if (isDone) {

            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
                {
                    headers:
                        { "Authorization": `Bearer ${userData.token}` }
                }
            );

            promise.then( ()=> {
                setIsDone(true);
                console.log('deu certo mudar de estado done', isDone);
            });

        } else {

            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
                {
                    headers:
                        { "Authorization": `Bearer ${userData.token}` }
                }
            );

            promise.then(() => {
                setIsDone(false);
                console.log('deu certo mudar de estado done', isDone);
            });
        };
    };

    return (
        <Container>
            <div>
                <Title>
                    {name}
                </Title>
                <Span>
                    Sequência atual: <Change change={done}>{currentSequence} {currentSequence > 1 ? 'dias' : 'dia'}</Change>
                </Span>
                <Span>
                    Seu recorde: <Change change={changeTextColor}>{highestSequence} {highestSequence > 1 ? 'dias' : 'dia'}</Change>
                </Span>
            </div>

            <Check onClick={handleClick} green={isDone}>
                <ion-icon class='check' name="checkmark-outline"></ion-icon>
            </Check>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 13px;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const Title = styled.p`
    font-family: 'Lexend Deca';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 7px;
    color: #666666;
`;

const Span = styled.p`
    font-family: 'Lexend Deca';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.changeColor ? '#8FC549' : '#666666'};

`;

const Check = styled.div`
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-color: ${props => props.green ? '#8FC549' : '#EBEBEB'};
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #fff;
    .check {
        stroke-width: 50;
    }
`;

const Change = styled.span`
    color: ${props => props.change ? '#8FC549' : '#666666'}
`;