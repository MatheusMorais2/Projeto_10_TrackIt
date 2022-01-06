import styled from 'styled-components';

import LoadingAnimation from '../Assets/Ellipsis-1s-121px.svg';

export default function LoadingButton() {
    return (
        <Loading type="image/svg+xml" data={LoadingAnimation}>svg-animation</Loading>
    )
};

const Loading = styled.object`
    max-height: 100%;
`;