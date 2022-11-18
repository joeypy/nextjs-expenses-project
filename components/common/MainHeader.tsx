import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';

interface IProps {
  title: string;
  subtitle: string;
}

const ContentHeader = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 1rem 0;
`;

export const MainHeader = ({ title, subtitle }: IProps) => {
  return (
    <ContentHeader>
      <Typography variant="h2" fontWeight="600" fontSize={26}>
        {title}
      </Typography>
      <Typography color="#4cceac" fontSize={15}>
        {subtitle}
      </Typography>
    </ContentHeader>
  );
};
