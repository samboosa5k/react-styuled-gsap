import styled from 'styled-components';
import { Fragment } from 'react';

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
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Card = (child: JSX.Element) => (
    <StyledCard>
        <div className='inner-card'>
            {child}
        </div>
    </StyledCard>
);

const StyledTimestamp = styled.span`
  font-style: italic;
  font-size: 0.75em;
  color: rgba(0, 0, 0, 0.25);
`;

export const Timestamp = (child: string) => (
    <StyledTimestamp>
        {child}
    </StyledTimestamp>
);

const StyledTitle = styled.h1`
`;

export const Title = (child: string) => (
    <StyledTitle>{child}</StyledTitle>
);

const StyledHeader = styled.header`
`;

export const Header = () => (
    <StyledHeader>
        {Title('Title')}
        {Timestamp('00:00 hrs')}
    </StyledHeader>
);

const StyledContent = styled(StyledCard)`
  text-align: justify;
  background-color: rgba(10, 22, 55, 0.1);
`;

export const Content = () => (
    <StyledContent>
        {Timestamp('I am some test content...bahhhhh!')}
    </StyledContent>
);

const ButtonControls = () => (
    <>
        <StyledCard as='button'>
            Submit
        </StyledCard>
        <StyledCard as='button'>
            Edit
        </StyledCard>
    </>
);

export const pipe = (...fns: Array<() => JSX.Element>) => (
    <>
        {
            fns.map((fn, i) => <Fragment key={`pipe-component-${i}`}>{fn()}</Fragment>)
        }
    </>
);

export const ExportedCard = () => Card(pipe(Header, Content, ButtonControls)) as JSX.Element;