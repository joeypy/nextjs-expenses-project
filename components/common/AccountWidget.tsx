import styled from '@emotion/styled';
import { Box, useTheme } from '@mui/material';
import React from 'react';
import {
  LocalAtmOutlinedIcon,
  AccountBalanceOutlinedIcon,
  CreditCardOutlinedIcon,
} from '@/components/common';
import { tokens } from '@/theme/theme';

interface Props {
  text: string;
}

export const AccountPill = ({ text }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let typeIcon: JSX.Element | null = null;

  if (text == 'Efectivo') {
    typeIcon = <LocalAtmOutlinedIcon />;
  }
  if (text == 'Zelle') {
    typeIcon = <AccountBalanceOutlinedIcon />;
  }
  if (text == 'Banesco Panama') {
    typeIcon = <CreditCardOutlinedIcon />;
  }

  return (
    <BoxStyled colors={colors}>
      {typeIcon}
      {text}
    </BoxStyled>
  );
};

const BoxStyled = styled(Box)<{ colors: any }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    color: ${({ colors }) => colors.greenAccent[500]};
  }
`;
