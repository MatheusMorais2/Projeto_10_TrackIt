import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import WideInput from "../../styles/wideInput";
import LoadingButton from "../../LoadingAnimation";

export default function FormSignUp () {

    const [signUpData, setSignUpData] = useState({email: '', name: '', image: '', password: ''});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function signUp(e) {

        e.preventDefault();
        setLoading(true);

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
            signUpData);

        promise.then( () => {
            navigate('/', { replace: true });
        });
        
        promise.catch( erro => {
            console.log('erro: ', erro);
            alert('Falha ao cadastrar');
            setLoading(false);
        });
    }

    return (
        <Container>
            <form onSubmit={signUp}>

                <WideInput placeholder='email'
                    onChange={e => setSignUpData({...signUpData, email: e.target.value})}
                    value={signUpData.email}
                    type='email'
                    disabled={loading}
                />

                <WideInput placeholder='senha'
                    onChange={e => setSignUpData({...signUpData, password: e.target.value})}
                    value={signUpData.password}
                    type='password'
                    disabled={loading}
                />

                <WideInput placeholder='nome'
                    onChange={e => setSignUpData({...signUpData, name: e.target.value})}
                    value={signUpData.name}
                    type='text'
                    disabled={loading}
                />

                <WideInput placeholder='foto'
                    onChange={e => setSignUpData({...signUpData, image: e.target.value})}
                    value={signUpData.image}
                    type='url'
                    disabled={loading}
                />

                <Button type='submit' disabled={loading}>
                    {loading ? <LoadingButton/> : 'Cadastrar' }
                </Button>
            </form>
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