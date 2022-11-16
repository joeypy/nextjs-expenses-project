import { tokens } from '@/theme/theme';
import {
  Box,
  Button,
  IconButton,
  TextField,
  ButtonGroup,
  useTheme,
  Stack,
  Typography,
  Switch,
} from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { ArrowBackOutlinedIcon, HeaderMain } from '../common';

interface Props {
  setIsNewTransactionActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewTransactionForm = ({ setIsNewTransactionActive }: Props) => {
  const [form, setForm] = useState('expenses');

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const initialValues = {};

  return (
    <>
      <HeaderMain
        title="NUEVA TRANSACCIÓN"
        subtitle="Datos para nueva transacción"
      />
      <Box mb="1rem">
        <IconButton
          aria-label="back-button"
          sx={{ backgroundColor: 'grey' }}
          onClick={() => setIsNewTransactionActive(false)}
        >
          <ArrowBackOutlinedIcon />
        </IconButton>
      </Box>
      <form noValidate autoComplete="off">
        <Box display="flex" alignItems="center" gap="5px">
          <Typography>Egreso</Typography>
          <Switch aria-label="Switch demo" defaultChecked color="primary" />
          <Typography>Ingreso</Typography>
        </Box>

        <TextField label="Standard" />
        <TextField label="Standard" />
        <TextField label="Standard" />
        <TextField label="Standard" />
        <TextField label="Standard" />
        <TextField label="Standard" />
      </form>
    </>
  );
};
