import { Fragment } from 'react';

import styled from 'styled-components';

// STYLES
const StyledCard = styled.div`
    padding: 0.5em;
    border-radius: 0.5em;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.1);
    font-family: sans-serif;
    margin: 0;

    > .inner-card {
        padding: 0.5em;
        border-radius: 0.5em;
        //border: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

const StyledTitle = styled.h1``;

const StyledTimestamp = styled.span`
    font-style: italic;
    font-size: 0.75em;
    color: rgba(0, 0, 0, 0.25);
`;

const StyledHeader = styled.header``;

const StyledContent = styled(StyledCard)`
    text-align: justify;
    background-color: rgba(10, 22, 55, 0.1);
`;

// COMPONENTS
export const Card = (child?: JSX.Element) => (
    <StyledCard>
        <div className="inner-card">{child}</div>
    </StyledCard>
);

const Title = (child: string) => <StyledTitle>{child}</StyledTitle>;
const Timestamp = (child: string) => <StyledTimestamp>{child}</StyledTimestamp>;

const Header = () => (
    <StyledHeader>
        {Title('Title')}
        {Timestamp('00:00 hrs')}
    </StyledHeader>
);

const Content = () => (
    <StyledContent>
        {Timestamp('I am some test content...bahhhhh!')}
    </StyledContent>
);

const ButtonControls = () => (
    <>
        <StyledCard as="button">Submit</StyledCard>
        <StyledCard as="button">Edit</StyledCard>
    </>
);

// FUNCTIONAL COMPONENTS
type ComponentChildFn = () => JSX.Element;
type ComponentWrapperFn = (child?: JSX.Element) => JSX.Element;
const map =
    (...fns: Array<ComponentChildFn>) =>
    () =>
        (
            <>
                {fns.map((fn, i) => (
                    <Fragment key={`pipe-component-${i}`}>{fn()}</Fragment>
                ))}
            </>
        );

const compose = (...fns: Array<ComponentWrapperFn>) =>
    fns.reduceRight(
        (wrapped: JSX.Element, fn: ComponentChildFn | ComponentWrapperFn) =>
            (wrapped && fn(wrapped)) || fn(),
        <></>
    );
const CardMap = map(Header, Content, ButtonControls);
export const CardComponent = compose(Card, CardMap);
