import { FC } from 'react';

import { componentMapper } from '@/utils';

import { Col, Row, StyledTable, THead } from '@/components/blocks/Table';

const column = {
    title: '',
    classList: '',
};
type Column = typeof column;

// @ts-ignore
const columns: { [key: string]: Column } = {
    column_1: {
        title: 'Title from columns',
        classList: '',
    },
    column_2: {
        title: 'Column 2',
        classList: '',
    },
    column_3: {
        title: 'Col 3',
        classList: '',
    },
};

// type ColumnType = typeof columns;
// type ColumnKeys = keyof ColumnType;
// type RowType = {
//     [key in ColumnKeys]: JSX.Element;
// };

const TableCol: FC<Column> = (props: Column) => {
    const { title, classList } = props;
    return <Col>{<span className={classList}>{title}</span>}</Col>;
};

const TableHead = () => (
    <THead>
        <Row>
            {componentMapper(TableCol, column, [
                columns['column_1'],
                columns['column_2'],
                columns['column_3'],
            ])}
        </Row>
    </THead>
);

export const DummyTable = () => (
    <StyledTable>
        <TableHead />
    </StyledTable>
);
