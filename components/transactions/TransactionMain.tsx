import { Box } from '@mui/material';
import { MainHeader } from '../common';
import { MainContainer } from '../layout';
import { TransactionTable, TransactionButtonsActions } from './';

interface Props {}

export const TransactionMain = (props: Props) => {
  return (
    <MainContainer>
      <MainHeader
        title="TRANSACCIONES"
        subtitle="Información de transacciones"
      />
      <TransactionButtonsActions />
      <TransactionTable />
    </MainContainer>
  );
};
