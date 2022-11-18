import { Box } from '@mui/material';
import React from 'react';
import { MainHeader } from '../common';

interface Props {}

export const DashboardMain = (props: Props) => {
  return (
    <Box
      sx={{
        p: '0 2rem',
      }}
    >
      <MainHeader title="Dashboard" subtitle="Bienvenido a tus finanzas" />
    </Box>
  );
};
