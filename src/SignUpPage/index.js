import styled from "styled-components";
import LoginLogo from "../LoginPage/LoginLogo";
import FormSignUp from "./FormSignUp";

export default function SignUpPage() {

    return (
        <Container>
            <LoginLogo/>
            <FormSignUp/>
            <SignUpText>Já tem uma conta? Faça login!</SignUpText>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 68px;

`;

const SignUpText = styled.div`
    font-family: 'Lexend Deca';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #52B6FF;
    text-decoration: underline;
    margin-top: 25px;
`;