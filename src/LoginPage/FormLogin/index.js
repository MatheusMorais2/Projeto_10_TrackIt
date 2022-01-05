import styled from 'styled-components';
import WideInput from '../../styles/wideInput';

export default function FormLogin() {
    return (
        <Container>
            <WideInput placeholder='email'/>

            <WideInput placeholder='senha'/>

            <Button>
                Entrar
            </Button>

        </Container>
    );
};

const Container = styled.div`
    gap: 6px;
    margin-top: 33px;
    padding: 0 36px;
`;

/* const Input = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 6px;
    padding: 0 11px;
    ::placeholder{
        font-family: 'Lexend Deca';
        font-style: 'Regular';
        font-size: 19.98px;
        color: #DBDBDB;
        padding-left: 11px;
    }
`; */

const Button = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Lexend Deca';
    font-size: 21px;
    font-weight: 400;
    color: #FFF;
`;