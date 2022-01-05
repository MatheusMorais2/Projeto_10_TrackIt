import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";

export default function HistoryPage() {

    return (
        <>
            <Header/>
            <Container>
                <Title>
                    Histórico
                </Title>
                <Main>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </Main>
            </Container>
            <Footer/>
        </>
        
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
    padding: 98px 15px 0px 15px;

`;

const Title = styled.p`
    font-family: 'Lexend Deca';
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #126BA5;
    margin-bottom: 17px;
`;

const Main = styled.div`
    font-family: 'Lexend Deca';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
`;