import { Card, TextField } from "@mui/material";
import styled from "styled-components";
import theme from "../../theme/theme";

export const StyledTextField = styled(TextField)({
    '&.MuiFormControl-root': {
        width: 250,
        margin: theme.spacing(2.5)
    },
    '& .MuiFormLabel-root, & .MuiInputLabel-root': {
        '&.Mui-focused': {
            color: theme.palette.grey[500]
        },
    },
    '& .MuiOutlinedInput-root, & .MuiInputBase-root': {
        '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
            border: '1px solid ' + theme.palette.grey[500],
        },
    },
});

export const StyledCard = styled(Card)({
    '&.MuiPaper-root': {
        marginTop: theme.spacing(3.75)
    }
});
