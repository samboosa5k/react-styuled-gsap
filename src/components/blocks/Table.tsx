import styled from "styled-components";


const StyledTable = styled.table`
    table-layout: fixed;
    width: 100%;
`

const StyledThead = styled.thead``

const StyledTbody = styled.tbody``

const TH = styled.th`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Row = styled.tr`
    display: flex;
    padding: inherit 2em;
`

const Cell = styled.td``

export const TableBlock = () => (
    <StyledTable>
        <StyledThead>
            <Row>
                <TH>Col 1: a th element with no wrap</TH>
                <TH>Col 2</TH>
                <TH>Col 3</TH>
                <TH>Col 4</TH>
            </Row>
        </StyledThead>
        <StyledTbody>
            <Row>
                <Cell>Celll 1 just a test to see about padding</Cell>
                <Cell>Cell 2</Cell>
                <Cell>Cell 3</Cell>
                <Cell>Cell 4</Cell>
            </Row>
        </StyledTbody>
    </StyledTable>
);