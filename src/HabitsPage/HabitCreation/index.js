import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";

import WideInput from "../../styles/wideInput";
import UserContext from "../../contexts/userContext.js";

export default function HabitCreation({ setShowCreationMenu}) {

    const { userData, setUserData } = useContext(UserContext);
    const [createHabit, setCreateHabit] = useState({name:'', days: []});
    const [loading, setLoading] = useState(false);
    const daysOfTheWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function handleClickDay(index) {
        setCreateHabit({...createHabit, days: [...createHabit.days, index] });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            createHabit, 
            { headers: 
                { "Authorization": `Bearer ${userData.token}`}
            }
        );

        promise.then(response => {
            setCreateHabit({ name: '', days: [] });
            setLoading(false);
            setShowCreationMenu(false);
        });

        promise.catch(error => console.log(error));
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <WideInput placeholder="nome do hábito" 
                    onChange={e => setCreateHabit({...createHabit, name: e.target.value})}
                    value={createHabit.name}
                    type='text'
                    disabled={loading}
                />
                
                <Days >
                    {daysOfTheWeek.map(
                        (elem, index) =>
                            <Day onClick={() => handleClickDay(index)} disabled={loading} key={index}>{elem}</Day>
                        
                    )}
                </Days>
                

                <Buttons>
                    <Cancel type="reset" disabled={loading}>Cancelar</Cancel >
                    <Save type='submit' disabled={loading}>Salvar</Save>
                </Buttons>

            </form>
            
        </Container>
    );

};

const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    height: 180px;
    padding: 18px;
    margin-bottom: 28px;
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

const Days = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 28px;
`;

const Day = styled.div`
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

