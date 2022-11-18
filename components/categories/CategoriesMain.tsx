import { Box } from '@mui/material';
import React from 'react';
import { MainHeader } from '../common';
import { CategoriesTable } from '.';

interface Props {}

export const CategoriesMain = (props: Props) => {
  return (
    <Box
      sx={{
        p: '0 2rem',
        width: '100%',
        fontSize: '1rem !important',
      }}
    >
      <MainHeader
        title="CATEGORÍAS"
        subtitle="Información acerca de las categorías"
      />
      <CategoriesTable />
    </Box>
  );
};
