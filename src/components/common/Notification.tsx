import React, { useState } from "react";
import { Alert, AlertTitle } from "@mui/material"
import { StyledCollapse } from "./styled";

interface INotificationProps {
    type: 'error' | 'success' | 'info' | 'warning';
    title: string;
    message: string;
}

export const Notification: React.FC<INotificationProps> = ({type, title, message}: INotificationProps) => {
    const [open, setOpen] = useState(true);

    return (
        <StyledCollapse in={open}>
            <Alert severity={type} onClose={() => setOpen(false)}>
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </StyledCollapse>
    )
};
