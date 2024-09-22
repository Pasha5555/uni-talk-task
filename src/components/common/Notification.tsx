import React, { useState } from "react";
import { Alert, AlertTitle, Collapse } from "@mui/material"

interface INotificationProps {
    type: 'error' | 'success' | 'info' | 'warning';
    title: string;
    message: string;
}

export const Notification: React.FC<INotificationProps> = ({type, title, message}: INotificationProps) => {
    const [open, setOpen] = useState(true);

    return (
        <Collapse in={open} sx={{ mt: 5, width: 400, bottom: 10, right: 10, position: 'absolute' }}>
            <Alert severity={type} onClose={() => setOpen(false)}>
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </Collapse>
    )
};
