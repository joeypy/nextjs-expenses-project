import { ChartContainer, PieChart } from '@/components/charts';
import { Box, Typography } from '@mui/material';
import { ListTransactions } from '../bar-chart';
import { MainContainer } from '../layout';

interface Props {}

export const PieChartMain = (props: Props) => {
  return (
    <MainContainer>
      <Typography variant="h3" pb="1rem">
        Categorías
      </Typography>
      <ChartContainer sx={{ boxShadow: 8 }}>
        <PieChart />
      </ChartContainer>
      <ListTransactions />
    </MainContainer>
  );
};
