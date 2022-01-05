import styled from "styled-components";

export default function DaysOfTheWeek () {
    const daysOfTheWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    return (
        <Days>
            {daysOfTheWeek.map((elem, index) => <Day key={index}>{elem}</Day>)}
        </Days>
    );
};

const Days = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 28px;
`;

const Day = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    text-align: center;
    color: #DBDBDB;
    background-color: #fff ;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.98px;
`;
