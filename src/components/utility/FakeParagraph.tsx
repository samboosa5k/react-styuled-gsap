import { FC } from 'react';

import styled from 'styled-components';

interface IFakeParagraph {
    columncount: number;
    linecount: number;
}

const StyledP = styled.p`
    margin-bottom: var(--spacing-lg);
    line-height: 2rem;
    background: rgba(0, 0, 0, 0.2);
`;

const StyledBR = styled.br`
    display: inline-block;
`;

export const FakeParagraph: FC<IFakeParagraph> = ({
    // columncount,
    linecount,
}) => (
    <>
        {Array.from({ length: linecount }).map((_) => (
            <StyledP>
                <>
                    {/*&#9608;*/}
                    <StyledBR />
                </>
            </StyledP>
        ))}
    </>
);
