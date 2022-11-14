import { Box } from '@mui/material';
import React from 'react';
import { HeaderMain } from '../common';

interface Props {}

export const DashboardMain = (props: Props) => {
  return (
    <Box
      sx={{
        p: '0 2rem',
      }}
    >
      <HeaderMain title="Dashboard" subtitle="Bienvenido a tus finanzas" />
    </Box>
  );
};
