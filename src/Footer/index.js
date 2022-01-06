import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Fixed>
            <Container>
                <Button>
                    <Link to='/habitos'>
                        Hábitos
                    </Link>
                </Button>

                <Link to='/hoje'>
                    <ProgressBar />
                </Link>

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

const ProgressBar = styled.div`
    width: 91px;
    height: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #52B6FF;
    border-radius: 50%;
    position: absolute;
    top: -31px;
    left: 50%;
`;

