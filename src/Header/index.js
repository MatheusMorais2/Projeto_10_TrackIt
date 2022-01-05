import styled from 'styled-components';

export default function Header() {

    return (
        <Container>
            <Span>TrackIt</Span>
            <ProfilePicture 
                src='https://s3-alpha-sig.figma.com/img/3b2c/d996/41709a8b318765b6bcf16bca3b9003fa?Expires=1642377600&Signature=MXd6fI1asCGluhDviAutY45s9TkUtE56UExlmuMNVB61Scgm8Za8q7Q9oVzVd4h1ns3sjQcGl72bZdo1gHKc4tr6R8WeuOAVT1M5s1GNgNOjHf~vxGLwI6ywz2NxVOtPfLB8TiJawXVFeGE5tSLsAAti30WLMI1ujKS-U0NJNBwrHEWrzYj80qrPWpQmm2ne7b~fnI5QwJoB9CSEyeEGpfiaA9Tu6uCagoouI7Jk8QmzLTzW3fFc8AOnu0AhYyqsL4qO2kIOJ2wlajTEzQlmUSgdpgregxOvrJE6fFIRoOPBy9tyhXdQ9B-f3vOJF1zFi6syS-0oTcy5WknQrkCwRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                alt='Profile Picture'
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