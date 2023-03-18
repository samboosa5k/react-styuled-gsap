import { FC, MouseEvent } from 'react';

import styled from 'styled-components';

import { FakeParagraph, Wrapper } from '@/components';

type FlexOrientation = 'column' | 'row';
type FlexJustify = 'space-between' | 'space-around';
interface FlexboxProps {
    orientation: FlexOrientation;
    justify: FlexJustify;
}
const Flexbox = styled(Wrapper)<FlexboxProps>`
    display: flex;
    height: auto;
    flex-direction: ${({ orientation }) => orientation || ''};
    justify-content: ${({ justify }) => justify || ''};

    &.hide {
        .newscard-description {
            opacity: 0;
            height: 0;
            transition: opacity 1s ease, height 2s ease 1s;
        }
    }
`;

const NewsContent = styled(Wrapper)`
    flex: 0.33;
`;
const Image = styled(NewsContent)`
    flex: 0.66;
    background: rgba(0, 0, 0, 0.2);
`;

interface INewsCard {
    onMouseDown?: (event: MouseEvent) => void;
}
export const NewsCard: FC<INewsCard> = ({ onMouseDown }) => (
    <Flexbox
        className="newscard"
        onMouseDown={onMouseDown}
        orientation={'row'}
        justify={'space-between'}>
        <NewsContent>
            <Wrapper as="h1">Title of news article</Wrapper>
            <Wrapper as="h5">
                Written by: Jasper | Date / Time: 18-03-2023 @ 14:00
            </Wrapper>
            <Wrapper className="newscard-description">
                <FakeParagraph linecount={7} columncount={4} />
            </Wrapper>
        </NewsContent>
        <Image />
    </Flexbox>
);
