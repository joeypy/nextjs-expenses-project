import { Box, Button, useTheme } from '@mui/material';
import React from 'react';
import { AddOutlinedIcon } from '../common';

interface Props {
  isNewTransactionActive: boolean;
  setIsNewTransactionActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TransactionButtonsActions = ({
  setIsNewTransactionActive,
}: Props) => {
  return (
    <>
      <Box mb="1rem" display="flex" justifyContent="flex-end">
        <Button
          color="primary"
          // sx={{ color: 'white' }}
          variant="contained"
          startIcon={<AddOutlinedIcon />}
          onClick={() => setIsNewTransactionActive(true)}
        >
          Nueva transacción
        </Button>
      </Box>
    </>
  );
};
