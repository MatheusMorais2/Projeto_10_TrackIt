import { useContext } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import TodaysHabitsContext from "../contexts/todaysHabitsContext";
import returnPercentageDone from "../scripts/returnPercentageDone";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {

    const { todaysHabits} = useContext(TodaysHabitsContext);
    let percentageDone = returnPercentageDone(todaysHabits);

    return (
        <Fixed>
            <Container>
                <Button>
                    <Link to='/habitos'>
                        Hábitos
                    </Link>
                </Button>

                <PhantomElement/>
                <ContainerProgressbar>
                    <Link to='/hoje'>
                        <CircularProgressbar 
                            value={percentageDone} 
                            text={`Hoje`}
                            styles={
                                buildStyles({
                                    backgroundColor: "#52B6FF",
                                    textColor: "#fff",
                                    pathColor: "#fff",
                                    trailColor: "transparent"
                                })
                            } 
                        />
                    </Link>
                </ContainerProgressbar>
                

                <Button>
                    <Link to='/historico'>
                        Histórico
                    </Link>
                </Button>
            </Container>
        </Fixed>
    );
};

const Fixed = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
`;

const Container = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    background-color: #fff;
    width: 100vw;
`;

const Button = styled.button`
    font-family: 'Lexend Deca';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #52B6FF;
`;

const ContainerProgressbar = styled.div`
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 50%;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.98px;
    padding: 6px;
    position: absolute;
    bottom: 10px;
`;

const PhantomElement = styled.div`
    width: 50px;
`;


