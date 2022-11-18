import { Box, useTheme } from '@mui/material';
import { DataGrid, GridEventListener, GridToolbar } from '@mui/x-data-grid';
import {
  AttachMoneyOutlinedIcon,
  TrendingDownOutlinedIcon,
  TrendingUpOutlinedIcon,
} from '@/components/common';
import { tokens } from '@/theme/theme';
import { AccountPill } from '../common/AccountWidget';

export const TransactionTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
      width: 70,
    },
    {
      field: 'description',
      headerName: 'Descripción',
      headerAlign: 'center',
      // align: 'center',
      flex: 2.5,
    },
    {
      field: 'amount',
      headerName: 'Monto',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: ({ row: { amount, transaction_type } }: any) => (
        <Box
          color={
            transaction_type == 'expenses'
              ? colors.redAccent[400]
              : colors.greenAccent[400]
          }
        >
          <Box fontWeight="600">
            {transaction_type == 'expenses' && '- '}$ {amount}
          </Box>
        </Box>
      ),
    },
    {
      field: 'transaction_type',
      headerName: 'Tipo',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: ({ row: { transaction_type } }: any) =>
        Indicator(transaction_type, colors),
    },
    {
      field: 'category',
      headerName: 'Categoría',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      // editable: true,
    },
    {
      field: 'account',
      headerName: 'Cuenta',
      headerAlign: 'center',
      // align: 'center',
      flex: 1.5,
      renderCell: ({ value }: any) => AccountPill({ text: value }),
    },
    {
      field: 'created_at',
      headerName: 'Fecha',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },
  ];

  const rows = [
    {
      id: 1,
      description: 'Pago de internet',
      amount: 30,
      category: 'internet',
      account: 'Efectivo',
      transaction_type: 'expenses',
      created_at: '12-05-2022',
    },
    {
      id: 2,
      description: 'Cobro de proyecto',
      amount: 1100,
      account: 'Banesco Panama',
      category: 'ingresos',
      transaction_type: 'income',
      created_at: '12-05-2022',
    },
    {
      id: 3,
      description: 'Compra de comida',
      amount: 100,
      account: 'Zelle',
      category: 'comida',
      transaction_type: 'expenses',
      created_at: '12-05-2022',
    },
  ];

  const handleOnRowDoubleClick: GridEventListener<'rowDoubleClick'> = ({
    row,
  }) => {
    console.log(row);
  };

  return (
    <Box
      height="75vh"
      sx={{
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: colors.greenAccent[600],
        },
        '& .MuiDataGrid-footerContainer': {
          backgroundColor: colors.greenAccent[600],
        },
        '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
          color: `${colors.grey[100]} !important`,
        },
      }}
    >
      <DataGrid
        // loading={true}
        rows={rows}
        // @ts-ignore
        columns={columns}
        pageSize={25}
        onRowDoubleClick={handleOnRowDoubleClick}
        components={{
          Toolbar: GridToolbar,
        }}
        sx={{
          fontSize: '1rem !important',
          background: "linear-gradient(to top, #232526ef, #2e2e2e7a)"
        }}
      />
    </Box>
  );
};

const Indicator = (type: 'expenses' | 'income', colors: any): JSX.Element => {
  return (
    <>
      {type == 'expenses' ? (
        <Box
          display="flex"
          gap="1rem"
          alignItems="center"
          textTransform="capitalize"
        >
          {/* TODO: Refactorizar este código y simplificarlo */}
          <TrendingDownOutlinedIcon
            style={{
              padding: '3px',
              fontSize: '40px',
              borderRadius: '5px',
              color: '#fd5246',
            }}
          />
          <Box color={colors.redAccent[500]}>{type}</Box>
        </Box>
      ) : (
        <Box
          display="flex"
          gap="1rem"
          alignItems="center"
          textTransform="capitalize"
        >
          <Box color={colors.greenAccent[400]}>{type}</Box>
          <TrendingUpOutlinedIcon
            style={{
              padding: '3px',
              fontSize: '40px',
              borderRadius: '5px',
              color: '#00c000',
            }}
          />
        </Box>
      )}
    </>
  );
};
