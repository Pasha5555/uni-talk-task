import * as React from 'react';
import { IOperator } from '../../models/IOperator';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';


const paginationModel = { page: 0, pageSize: 10 };

export interface IOperatorsTableProps {
    columns: any;
    rows: IOperator[];
}

const StyledDataGrid = styled(DataGrid)({
    '& .MuiDataGrid-columnHeaderTitle, div[data-colindex="0"]': {
        fontWeight: 600
    },
    '& .MuiDataGrid-columnSeparator': {
        display: 'none !important'
    },
    '& .MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader:focus, .MuiDataGrid-iconButtonContainer:focus': {
        fontSize: 15,
        outline: 'solid #f04259 1px !important',
    },
    '& .MuiTablePagination-selectLabel, & .MuiSelect-select': {
        color: '#668099',
    },
    '& .MuiDataGrid-scrollbar': {
        '&::-webkit-scrollbar': {
            width: 7,
            height: 7,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: "grey",
            borderRadius: 5,
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: "#fff",
        },
    },
});

export default function OperatorsTable ({columns, rows}: IOperatorsTableProps) {

    return (
        <Paper sx={{ width: '100%', height: 500 }}>
            <StyledDataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection={false}
                sx={{ border: 0 }}
                rowHeight={60}
                disableRowSelectionOnClick
            />
        </Paper>
    );
}
