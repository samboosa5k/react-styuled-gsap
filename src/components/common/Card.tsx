import styled from 'styled-components';

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

export const Card = () => (
    <StyledCard>
        <div className='inner-card'>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
        </div>
    </StyledCard>
);