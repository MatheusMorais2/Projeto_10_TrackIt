import styled from 'styled-components';
import LoginLogo from './LoginLogo';
import FormLogin from './FormLogin';
import { Link } from 'react-router-dom';

export default function LoginPage() {

    return (
        <Container>
            <LoginLogo/>
            <FormLogin/>
            <Link to="/cadastro">
                <SignUpText>
                    Não tem uma conta? Cadastre-se!
                </SignUpText>
            </Link>
        </Container>
    );
};

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