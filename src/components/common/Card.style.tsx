// STYLES
import styled from 'styled-components';

export const StyledCard = styled.div`
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

export const StyledTitle = styled.h1``;

export const StyledTimestamp = styled.span`
    font-style: italic;
    font-size: 0.75em;
    color: rgba(0, 0, 0, 0.25);
`;

export const StyledHeader = styled.header`
`;

export const StyledContent = styled(StyledCard)`
    text-align: justify;
    background-color: rgba(10, 22, 55, 0.1);
`;

export const StyledControls = styled.span`
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