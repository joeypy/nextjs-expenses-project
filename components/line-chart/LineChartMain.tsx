import { Box, Typography } from '@mui/material';
import React from 'react';
import { ListTransactions } from '@/components/bar-chart';
import { ChartContainer, LineChart } from '../charts';
import { MainContainer } from '../layout';

interface Props {}

export const LineChartMain = (props: Props) => {
  return (
    <MainContainer>
      <Typography variant="h3" pb="1rem">
        Transacciones diarias
      </Typography>
      <ChartContainer>
        <LineChart />
      </ChartContainer>
      <ListTransactions />
    </MainContainer>
  );
};
