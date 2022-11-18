import { Box } from '@mui/material';
import React from 'react';
import { MainHeader } from '../common';
import { AccountTable } from './';

interface Props {}

export const AccountMain = (props: Props) => {
  return (
    <Box
      sx={{
        p: '0 2rem',
        width: '100%',
      }}
    >
      <MainHeader title="CUENTAS" subtitle="Información de cuentas" />
      <AccountTable />
    </Box>
  );
};
