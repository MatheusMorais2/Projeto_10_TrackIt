import styled from 'styled-components';
import UserContext from '../contexts/userContext';
import { useContext } from 'react';

export default function Header() {
    const { userData, setUserData } = useContext(UserContext);
    console.log('userData header: ', userData);
    return (
        <Container>
            <Span>TrackIt</Span>
            <ProfilePicture 
                src={userData.image}
                alt={userData.name}
            />
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
`;

const Span = styled.span`
    font-family: 'Playball';
    font-size: 39px;
    font-style: normal;
    font-weight: 400;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
`;

const ProfilePicture = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
`;