import React from "react";
import { Box, Stack } from "@mui/material"
import { StyledCircularProgress } from "./styled";

export const Loader: React.FC = () => {
    return (
        <Stack height="80vh">
            <StyledCircularProgress 
                size={60}
                thickness={2}
                value={100}
            />
        </Stack>
    )
};
