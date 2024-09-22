import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

export interface IUserProps {
    userAvatarUrl: string;
    userName: string;
}

export const User: React.FC<IUserProps> = ({userAvatarUrl, userName}: IUserProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: "10px" }}>
        <Avatar src={userAvatarUrl} />
        <Typography variant="body2">{userName}</Typography>
    </Box>
  );
}
