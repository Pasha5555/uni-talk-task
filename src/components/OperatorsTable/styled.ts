import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

export const StyledDataGrid = styled(DataGrid)({
    '& .MuiDataGrid-columnHeaderTitle, div[data-colindex="0"]': {
        fontWeight: 600
    },
    '& .MuiDataGrid-columnSeparator': {
        display: 'none !important'
    },
    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within, &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
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
            backgroundColor: "lightgrey",
            borderRadius: 5,
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: "#fff",
        },
    },
});
