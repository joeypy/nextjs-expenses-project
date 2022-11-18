import React, { useState } from 'react';
import { BarChart, ChartContainer } from '@/components/charts';
import { Box, FormControlLabel, Switch, Typography } from '@mui/material';
import { ListTransactions } from './ListTransactions';

interface Props {}

export const BarChartMain = (props: Props) => {
  const [isLabelsVisible, setIsLabelsVisible] = useState(false);
  return (
    <Box sx={{ height: '400px' }} p="0 2rem">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" pb="1rem">
          Ingresos y Gastos
        </Typography>
        <Box>
          <FormControlLabel
            control={
              <Switch
                checked={isLabelsVisible}
                onChange={(e) => setIsLabelsVisible(e.target.checked)}
              />
            }
            label="Labels"
            labelPlacement="start"
          />
        </Box>
      </Box>

      <ChartContainer sx={{ boxShadow: 8 }}>
        <BarChart isLabelsVisible={isLabelsVisible} />
      </ChartContainer>

      <ListTransactions />
    </Box>
  );
};
