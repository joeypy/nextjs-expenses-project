import { Box, useTheme } from '@mui/material';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import {
  AttachMoneyOutlinedIcon,
  TrendingDownOutlinedIcon,
  TrendingUpOutlinedIcon,
} from '@/components/common';
import { tokens } from '@/theme/theme';
import { AccountPill } from '../common/AccountWidget';

export const AccountTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    // {
    //   field: 'id',
    //   headerName: 'ID',
    //   headerAlign: 'center',
    //   align: 'center',
    //   flex: 0.5,
    // },
    {
      field: 'account',
      headerName: 'Cuenta',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: ({ value }: any) => AccountPill({ text: value }),
    },
    {
      field: 'amount',
      headerName: 'Total',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: ({ row: { transaction_type, amount } }: any) => (
        <>
          <AttachMoneyOutlinedIcon /> {amount}
        </>
      ),
    },
    // {
    //   field: 'created_at',
    //   headerName: 'Fecha',
    //   headerAlign: 'center',
    //   align: 'center',
    //   flex: 1,
    // },
  ];

  const rows = [
    {
      id: 1,
      amount: 30,
      account: 'Efectivo',
      created_at: '12-05-2022',
    },
    {
      id: 2,
      amount: 1100,
      account: 'Banesco Panama',
      created_at: '12-05-2022',
    },
    {
      id: 3,
      amount: 100,
      account: 'Zelle',
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
      }}
    >
      <DataGrid
        // autoHeight
        // loading={true}
        // experimentalFeatures={{ newEditingApi: true }}
        rows={rows}
        // @ts-ignore
        columns={columns}
        pageSize={25}
        sx={{
          fontSize: '1rem !important',
        }}
        onRowDoubleClick={handleOnRowDoubleClick}
      />
    </Box>
  );
};

const Indicator = (type: 'expenses' | 'income', colors: any): JSX.Element => {
  return (
    <>
      {type == 'expenses' ? (
        <TrendingDownOutlinedIcon
          style={{
            backgroundColor: colors.redAccent[600],
            padding: '3px',
            fontSize: '40px',
            borderRadius: '5px',
          }}
        />
      ) : (
        <TrendingUpOutlinedIcon
          style={{
            backgroundColor: colors.greenAccent[600],
            padding: '3px',
            fontSize: '40px',
            borderRadius: '5px',
          }}
        />
      )}
    </>
  );
};
