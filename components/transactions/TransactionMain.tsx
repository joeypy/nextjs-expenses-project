import { Box } from '@mui/material';
import React from 'react';
import { HeaderMain } from '../common';
import { TransactionTable } from './TransactionTable';

interface Props {}

export const TransactionMain = (props: Props) => {
  return (
    <Box
      sx={{
        p: '0 2rem',
        width: '100%',
        height: '100%',
        fontSize: '1rem !important',
      }}
    >
      <HeaderMain
        title="TRANSACCIONES"
        subtitle="Información de transacciones"
      />
      <TransactionTable />
    </Box>
  );
};
