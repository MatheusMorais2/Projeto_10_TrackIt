import styled from "styled-components";

export default function HabitToday( {info} ) {
    const {title, streak, record} = info;

    console.log('info: ', info);
    console.log('Title: ', title);
    console.log('streak: ', streak);
    console.log('record: ', record);

    return (
        <Container>
            <div>
                <Title>
                    {title}
                </Title>
                <Span>
                    Sequência atual: {streak} dias
                </Span>
                <Span>
                    Seu recorde: {record} dias
                </Span>
            </div>

            <Check>
                <ion-icon name="checkmark-outline"></ion-icon>
            </Check>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 13px;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const Title = styled.p`
    font-family: 'Lexend Deca';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 7px;
    color: #666666;
`;

const Span = styled.p`
    font-family: 'Lexend Deca';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;

`;

const Check = styled.div`
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-color: #EBEBEB;
    display: flex; 
    justify-content: center;
    align-items: center;

`;