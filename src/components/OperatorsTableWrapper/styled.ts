import { Card, TextField } from "@mui/material";
import styled from "styled-components";


export const StyledTextField = styled(TextField)({
    '&.MuiFormControl-root': {
        width: 250,
        margin: '20px'
    },
    '& .MuiFormLabel-root, & .MuiInputLabel-root': {
        '&.Mui-focused': {
            color: 'grey'
        },
    },
    '& .MuiOutlinedInput-root, & .MuiInputBase-root': {
        '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
            border: '1px solid grey',
        },
    },
});

export const StyledCard = styled(Card)({
    '&.MuiPaper-root': {
        marginTop: '30px'
    }
});
