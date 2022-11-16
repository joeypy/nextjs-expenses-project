import { Box } from '@mui/material';
import React, { useState } from 'react';
import { HeaderMain } from '../common';
import {
  TransactionTable,
  NewTransactionForm,
  TransactionButtonsActions,
} from './';

interface Props {}

export const TransactionMain = (props: Props) => {
  const [isNewTransactionActive, setIsNewTransactionActive] = useState(false);

  return (
    <Box
      sx={{
        p: '0 2rem',
        width: '100%',
        fontSize: '1rem !important',
      }}
    >
      {!isNewTransactionActive ? (
        <>
          <HeaderMain
            title="TRANSACCIONES"
            subtitle="Información de transacciones"
          />
          <TransactionButtonsActions
            isNewTransactionActive={isNewTransactionActive}
            setIsNewTransactionActive={setIsNewTransactionActive}
          />
          <TransactionTable />
        </>
      ) : (
        <>
          <NewTransactionForm
            setIsNewTransactionActive={setIsNewTransactionActive}
          />
        </>
      )}
    </Box>
  );
};
