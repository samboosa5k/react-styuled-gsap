import styled from 'styled-components';

export const StyledTable = styled.table`
    table-layout: fixed;
    width: 100%;
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const Col = styled.th`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Row = styled.tr`
    display: flex;
    padding: 1em 2em;
`;

export const Cell = styled.td``;

export const TableBlock = () => (
    <StyledTable>
        <THead>
            <Row>
                <Col>Col 1: a Col element with no wrap</Col>
                <Col>Col 2</Col>
                <Col>Col 3</Col>
                <Col>Col 4</Col>
            </Row>
        </THead>
        <TBody>
            <Row>
                <Cell>Celll 1 just a test to see about padding</Cell>
                <Cell>Cell 2</Cell>
                <Cell>Cell 3</Cell>
                <Cell>Cell 4</Cell>
            </Row>
        </TBody>
    </StyledTable>
);
