import React from 'react';
import { Stack, Typography } from '@mui/material';
import { StyledAvatar } from './styled';

export interface IUserProps {
    userAvatarUrl: string;
    userName: string;
}

export const User: React.FC<IUserProps> = ({userAvatarUrl, userName}: IUserProps) => {
  return (
    <Stack
        direction="row" 
        spacing={1.25}
        sx={{ alignItems: 'center', mt: 1.25 }}
    >
        <StyledAvatar src={userAvatarUrl} />
        <Typography variant="body2">{userName}</Typography>
    </Stack>
  );
}
