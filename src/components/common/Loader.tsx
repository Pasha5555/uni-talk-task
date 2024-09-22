import React from "react";
import { Box, CircularProgress } from "@mui/material"

export const Loader: React.FC = () => {
    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            height="80vh"
        >
            <CircularProgress 
                sx={() => ({ color: '#f04259' })}
                size={60}
                thickness={2}
                value={100}
            />
        </Box>
    )
};
