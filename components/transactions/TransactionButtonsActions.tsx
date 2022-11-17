import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';
import { AddOutlinedIcon } from '../common';

interface Props {}

export const TransactionButtonsActions = ({}: Props) => {
  const router = useRouter();

  const handleNewTransaction = () => {
    router.push('/transactions/add-transaction');
  };

  return (
    <>
      <Box mb="1rem" display="flex" justifyContent="flex-end">
        <Button
          color="primary"
          // sx={{ color: 'white' }}
          variant="contained"
          startIcon={<AddOutlinedIcon />}
          onClick={handleNewTransaction}
        >
          Nueva transacción
        </Button>
      </Box>
    </>
  );
};
