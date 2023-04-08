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
  
    .card-header, .card-content {
      margin: auto auto 1em auto;
    }
`;

const StyledTitle = styled.h1``;

const StyledTimestamp = styled.span`
    font-style: italic;
    font-size: 0.75em;
    color: rgba(0, 0, 0, 0.25);
`;

const StyledHeader = styled.header`
`;

const StyledContent = styled(StyledCard)`
    text-align: justify;
    background-color: rgba(10, 22, 55, 0.1);
`;

const StyledControls = styled.span`
  display: block;
  width: fit-content;
  margin: auto 0 auto auto;
  
  .button-submit {
    background-color: rgba(10, 200, 55, 0.25);
  }
  
  .button-edit {
    margin-left: 0.5em;
    background-color: rgba(10, 22, 200, 0.25);
  }
`

// COMPONENTS
export const Card = (child?: JSX.Element) => (
    <StyledCard>
        <div className="inner-card">{child}</div>
    </StyledCard>
);

const Title = (child: string) => <StyledTitle>{child}</StyledTitle>;
const Timestamp = (child: string) => <StyledTimestamp>{child}</StyledTimestamp>;

const Header = () => (
    <StyledHeader className="card-header">
        {Title('Title')}
        {Timestamp('00:00 hrs')}
    </StyledHeader>
);

const Content = () => (
    <StyledContent className="card-content">
        {Timestamp('I am some test content...bahhhhh!')}
    </StyledContent>
);

const ButtonControls = () => (
    <StyledControls>
        <StyledCard className="button-submit" as="button">Submit</StyledCard>
        <StyledCard className="button-edit" as="button">Edit</StyledCard>
    </StyledControls>
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
