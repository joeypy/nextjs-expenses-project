import { Box } from '@mui/material';
import { HeaderMain } from '../common';
import { MainContainer } from '../layout';
import { TransactionTable, TransactionButtonsActions } from './';

interface Props {}

export const TransactionMain = (props: Props) => {
  return (
    <MainContainer>
      <HeaderMain
        title="TRANSACCIONES"
        subtitle="Información de transacciones"
      />
      <TransactionButtonsActions />
      <TransactionTable />
    </MainContainer>
  );
};
