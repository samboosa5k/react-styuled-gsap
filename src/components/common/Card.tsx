import { compose, map } from './utility';

import {
    StyledCard,
    StyledContent,
    StyledControls,
    StyledHeader,
    StyledTimestamp,
    StyledTitle,
} from './Card.style';

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
        <StyledCard className="button-submit" as="button">
            Submit
        </StyledCard>
        <StyledCard className="button-edit" as="button">
            Edit
        </StyledCard>
    </StyledControls>
);

const CardMap = map(Header, Content, ButtonControls);
export const CardComponent = compose(Card, CardMap);