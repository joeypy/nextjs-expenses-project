import { Box } from '@mui/material';
import React from 'react';
import { HeaderMain } from '../common';
import { AccountTable } from './';

interface Props {}

export const AccountMain = (props: Props) => {
  return (
    <Box
      sx={{
        p: '0 2rem',
        width: '100%',
        fontSize: '1rem !important',
      }}
    >
      <HeaderMain
        title="TRANSACCIONES"
        subtitle="Información de transacciones"
      />
      <AccountTable />
    </Box>
  );
};
