import styled from "styled-components";
import WideInput from "../../styles/wideInput";

export default function FormSignUp () {
    return (
        <Container>
            <WideInput placeholder='email'/>
            <WideInput placeholder='senha' />
            <WideInput placeholder='nome' />
            <WideInput placeholder='foto' />

            <Button>Cadastrar</Button>
        </Container>

    );
};

const Container = styled.div`
    gap: 6px;
    margin-top: 33px;
    padding: 0 36px;
`;

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