import React from 'react';
import { BarChart, ChartContainer } from '@/components/charts';
import { Box, Typography } from '@mui/material';
import { ListTransactions } from './ListTransactions';

interface Props {}

export const BarChartMain = (props: Props) => {
  return (
    <Box sx={{ height: '400px' }} p="0 2rem">
      <Typography variant="h3" pb="1rem">
        Ingresos y Gastos
      </Typography>
      <ChartContainer sx={{ boxShadow: 8 }}>
        <BarChart />
      </ChartContainer>
      <ListTransactions />
    </Box>
  );
};
