import styled from 'styled-components';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoadingAnimation from '../Assets/Ellipsis-1s-121px.svg';
import { TailSpin } from 'react-loader-spinner';

export default function LoadingButton() {
    return (
        <TailSpin height='30px' color='#fff' arialLabel="loading-indicator" />
    )
};

const Loading = styled.object`
    max-height: 100%;
`;