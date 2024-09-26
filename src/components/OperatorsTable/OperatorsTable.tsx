import * as React from 'react';
import { GridPaginationModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { StyledDataGrid, StyledPaper } from './styled';
import { GridColDef, GridRowModel } from '@mui/x-data-grid/models';

export interface IOperatorsTableProps {
    columns: GridColDef[];
    rows: GridRowModel[];
}

export const OperatorsTable: React.FC<IOperatorsTableProps> = ({columns, rows}: IOperatorsTableProps) => {
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({ page: 0, pageSize: 10 });

    return (
        <StyledPaper>
            <StyledDataGrid
                rows={rows}
                columns={columns}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[5, 10, 15]}
                checkboxSelection={false}
                rowHeight={60}
                disableRowSelectionOnClick
            />
        </StyledPaper>
    );
}
