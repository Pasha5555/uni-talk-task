import { Avatar, Box, Card, Container, Typography } from '@mui/material';
import React from 'react';

export interface IUserProps {
    userAvatarUrl: string;
    userName: string;
}

export default function User ({userAvatarUrl, userName}: IUserProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: "10px" }}>
        <Avatar src={userAvatarUrl} />
        <Typography variant="body2">{userName}</Typography>
    </Box>
  );
}
