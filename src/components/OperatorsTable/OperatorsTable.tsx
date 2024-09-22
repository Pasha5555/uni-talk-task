import * as React from 'react';
import { GridPaginationModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { StyledDataGrid } from './styled';
import { GridColDef, GridRowModel } from '@mui/x-data-grid/models';

export interface IOperatorsTableProps {
    columns: GridColDef[];
    rows: GridRowModel[];
}

export const OperatorsTable: React.FC<IOperatorsTableProps> = ({columns, rows}: IOperatorsTableProps) => {
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({ page: 0, pageSize: 10 });

    return (
        <Paper sx={{ width: '100%', height: 500 }}>
            <StyledDataGrid
                rows={rows}
                columns={columns}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[5, 10, 15]}
                checkboxSelection={false}
                sx={{ border: 0 }}
                rowHeight={60}
                disableRowSelectionOnClick
            />
        </Paper>
    );
}
