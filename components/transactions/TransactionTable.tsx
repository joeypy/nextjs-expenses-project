import { DataGrid } from '@mui/x-data-grid';

export const TransactionTable = () => {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'description',
      headerName: 'Descripción',
      width: 250,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'amount',
      headerName: 'Monto',
      headerAlign: 'center',
      align: 'center',
      valueGetter: ({ row }: any) =>
        `${row.transaction_type == 'expenses' ? '-' : '+'} $${row.amount}` ||
        '-',
    },
    {
      field: 'category',
      headerName: 'Categoría',
      headerAlign: 'center',
      align: 'center',
      // editable: true,
    },
    {
      field: 'account',
      headerName: 'Cuenta',
      headerAlign: 'center',
      align: 'center',
      width: 180,
      // editable: true,
    },
    {
      field: 'created_at',
      headerName: 'Fecha',
      sortable: false,
      headerAlign: 'center',
      align: 'center',
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
      account: 'Banesco Panamá',
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

  return (
    <DataGrid
      autoHeight
      rows={rows}
      density="compact"
      // @ts-ignore
      columns={columns}
      // loading={true}
      pageSize={50}
      rowsPerPageOptions={[15]}
      checkboxSelection
      // disableSelectionOnClick
      // experimentalFeatures={{ newEditingApi: true }}
      sx={{
        fontSize: '1rem !important',
      }}
    />
  );
};
