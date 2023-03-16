import styled from 'styled-components';

import { Wrapper } from '@/components';

import { Doge } from './Doge';

const StyledDoge = styled(Doge)``;

const WrapDoge = styled.div`
    display: flex;
    position: relative;
    margin: 0 auto;
    width: 128px;
    height: 128px;
`;

export const Page0Foreword = () => {
    return (
        <Wrapper>
            <h1 className="title">Foreword</h1>
            <p className="page">
                I tried to weasel my way out of this and delay the presentation.
                Nienke was not having any of it, thank you Nienke.
            </p>
            <WrapDoge>
                <StyledDoge />
            </WrapDoge>
        </Wrapper>
    );
};

export const Page1React = () => {
    return (
        <Wrapper>
            <h1 className="title">React</h1>
            <p className="page">
                React is complicated and likes to do things a special way. But I
                like it.
            </p>
        </Wrapper>
    );
};

export const Page2Styled = () => {
    return (
        <Wrapper>
            <h1 className="title">Styled</h1>
            <p className="page">
                Styled components are like SCSS, but in React. A better
                explanation can be found using the link below.
            </p>
        </Wrapper>
    );
};
