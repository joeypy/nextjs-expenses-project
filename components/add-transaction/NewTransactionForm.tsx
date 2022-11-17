import { useRouter } from 'next/router';
import OutlinedInput from '@mui/material/OutlinedInput';
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  Switch,
  useMediaQuery,
  TextareaAutosize,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  ArrowBackOutlinedIcon,
  AttachMoneyOutlinedIcon,
  HeaderMain,
  TrendingDownOutlinedIcon,
  TrendingUpOutlinedIcon,
} from '../common';
import { MainContainer } from '../layout';
import { ITransaction } from '@/interfaces/index';
import { DatePicker } from '@mui/x-date-pickers';

interface Props {}

export const NewTransactionForm = ({}: Props) => {
  const router = useRouter();
  const isNonMobile = useMediaQuery('(min-width:850px)');

  const handleBackPage = () => {
    router.push('/transactions');
  };

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <MainContainer>
      <HeaderMain
        title="NUEVA TRANSACCIÓN"
        subtitle="Datos para nueva transacción"
      />

      <Box mb="1rem">
        <IconButton
          aria-label="back-button"
          sx={{ backgroundColor: 'grey' }}
          onClick={handleBackPage}
        >
          <ArrowBackOutlinedIcon />
        </IconButton>
      </Box>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={transactionSchema}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              width="min(800px, 90%)"
              m="auto"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': {
                  gridColumn: isNonMobile ? undefined : 'span 4',
                },
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="5px"
                sx={{ gridColumn: 'span 4' }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  gap="5px"
                  sx={{
                    bgcolor: 'error.main',
                    p: '5px 10px',
                    borderRadius: '5px',
                  }}
                >
                  <TrendingDownOutlinedIcon />
                  <Typography>Egreso</Typography>
                </Box>
                <Switch
                  aria-label="Switch demo"
                  defaultChecked
                  color="primary"
                  checked={values.transactionType}
                  onChange={(event) =>
                    setFieldValue('transactionType', event.target.checked)
                  }
                />
                <Box
                  display="flex"
                  alignItems="center"
                  gap="5px"
                  sx={{
                    bgcolor: 'primary.main',
                    p: '5px 10px',
                    borderRadius: '5px',
                  }}
                >
                  <TrendingUpOutlinedIcon />
                  <Typography>Ingreso </Typography>
                </Box>
              </Box>

              <FormControl
                sx={{ gridColumn: 'span 2' }}
                error={!!touched.account && !!errors.account}
              >
                <InputLabel required id="select-account-label">
                  Cuenta
                </InputLabel>
                <Select
                  labelId="select-account-label"
                  id="account"
                  displayEmpty
                  name="account"
                  value={values.account}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  input={<OutlinedInput required label="Cuenta" />}
                  // MenuProps={MenuProps}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="banesco panama">Banesco Panamá</MenuItem>
                </Select>
                {!!touched.account && !!errors.account && (
                  <FormHelperText>{errors.account}</FormHelperText>
                )}
              </FormControl>

              <TextField
                required
                type="number"
                variant="outlined"
                label="Monto"
                name="amount"
                value={values.amount}
                error={!!touched.amount && !!errors.amount}
                helperText={touched.amount && errors.amount}
                onBlur={handleBlur}
                onChange={handleChange}
                sx={{ gridColumn: 'span 2' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <FormControl
                sx={{ gridColumn: 'span 2' }}
                error={!!touched.category && !!errors.category}
              >
                <InputLabel required id="select-category-label">
                  Categoría
                </InputLabel>
                <Select
                  required
                  labelId="select-category-label"
                  id="category"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  input={<OutlinedInput required label="Categoría" />}
                  // MenuProps={MenuProps}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="internet">internet</MenuItem>
                </Select>
                {!!touched.category && !!errors.category && (
                  <FormHelperText>{errors.category}</FormHelperText>
                )}
              </FormControl>

              <FormControl
                sx={{ gridColumn: 'span 2' }}
                error={!!errors.createdAt}
              >
                <DatePicker
                  label="Fecha"
                  value={values.createdAt}
                  onChange={(value) => setFieldValue('createdAt', value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Fecha"
                      name="createdAt"
                      fullWidth
                      onBlur={handleBlur}
                      error={!!touched.createdAt && !!errors.createdAt}
                    />
                  )}
                />
                {!!touched.createdAt && !!errors.createdAt && (
                  // @ts-ignore
                  <FormHelperText>{errors.createdAt}</FormHelperText>
                )}
              </FormControl>

              <TextField
                type="text"
                variant="outlined"
                label="Descripción (opcional)"
                name="description"
                value={values.description}
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                onBlur={handleBlur}
                onChange={handleChange}
                sx={{ gridColumn: 'span 4' }}
              />

              <Box
                display="flex"
                justifyContent="flex-end"
                sx={{ gridColumn: 'span 4' }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  color="primary"
                  variant="contained"
                >
                  Crear transacción
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </MainContainer>
  );
};

const initialValues: ITransaction = {
  description: '',
  amount: undefined,
  transactionType: false,
  category: '',
  account: '',
  createdAt: new Date(),
};

const transactionSchema = yup.object().shape({
  description: yup.string(),
  amount: yup
    .number()
    .required('Campo requerido')
    .positive('Debe ser un valor positivo'),
  transactionType: yup.boolean().required('Campo requerido'),
  category: yup.string().required('Campo requerido'),
  account: yup.string().required('Campo requerido'),
  createdAt: yup
    .date()
    .typeError('Debe colocar una fecha correcta')
    .required('Campo requerido'),
});
