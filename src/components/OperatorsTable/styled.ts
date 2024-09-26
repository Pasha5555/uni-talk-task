import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import theme from '../../theme/theme';

export const StyledDataGrid = styled(DataGrid)({
    '& .MuiDataGrid-columnHeaderTitle, div[data-colindex="0"]': {
        fontWeight: theme.typography.tableHeader.fontWeight
    },
    '& .MuiDataGrid-columnSeparator': {
        display: 'none !important'
    },
    '&.MuiDataGrid-root': {
        borderWidth: 0
    },
    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within, &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
        fontSize: theme.typography.focusedTableCell.fontSize,
        outline: 'solid ' + theme.palette.primary.main + ' 1px !important'
    },
    '& .MuiTablePagination-selectLabel, & .MuiSelect-select': {
        color: theme.palette.secondary.main,
    },
    '& .MuiDataGrid-scrollbar': {
        '&::-webkit-scrollbar': {
            width: 7,
            height: 7,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.light,
            borderRadius: 5,
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.grey[200],
        },
    },
});

export const StyledPaper = styled(Paper)({
    '&.MuiPaper-root': {
        width: '100%',
        height: '500px'
    }
});

