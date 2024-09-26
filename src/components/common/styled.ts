import { Avatar, Checkbox, CircularProgress, Collapse } from "@mui/material";
import styled from "styled-components";
import theme from "../../theme/theme";

export const StyledCheckbox = styled(Checkbox)({
    '&.Mui-checked': { 
        color: theme.palette.primary.main
    },
    '&.MuiCheckbox-root': { 
        padding: theme.spacing(0)
    },
    '& .MuiSvgIcon-root': { 
        color: theme.palette.primary.main,
        fontSize: 22 
    }
});

export const StyledCircularProgress = styled(CircularProgress)({
    '& .MuiCircularProgress-circle': {
        color: theme.palette.primary.main
    }, 
    '&.MuiCircularProgress-root': {
        margin: 'auto'
    }
});

export const StyledCollapse = styled(Collapse)({
    '& .MuiCollapse-wrapper': {
        position: 'absolute', 
        bottom: 10, 
        right: 10,
        width: 400
    }
});

export const StyledAvatar = styled(Avatar)({
    '&.MuiAvatar-root': {
        background: theme.palette.primary.main
    }
});
