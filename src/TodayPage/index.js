import Header from "../Header";
import styled from "styled-components";
import HabitToday from "./HabitToday";

export default function TodayPage() {

    const habitsToday = [{title : 'ler 1 livro', streak: 4, record: 7},
        { title: 'ler 1 livro', streak: 4, record: 7 },
        { title: 'ler 1 livro', streak: 4, record: 7 }
    ];

    return (
            <>
                <Header />
                <Container>
                    <Date>Segunda, 17/05</Date>
                    <Status>Nenhum hábito concluído ainda</Status>
                    <Main>
                        {habitsToday.map( (elem, index) => <HabitToday key={index} info={elem}/>)}
                    </Main>

                </Container>
            </>
    );
};

const Container = styled.div`
    background-color: #E5E5E5;
    padding: 98px 18px 0px 18px;
    width: 100vw;
    height: 100vh;
`;

const Date = styled.p`
    font-family: 'Lexend Deca';
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #126BA5;
`;

const Status = styled.p`
    font-family: 'Lexend Deca';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #BABABA;
    margin-bottom: 28px;
`;

const Main = styled.div`
    gap: 10px;
`;