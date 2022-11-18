import { Box, useTheme } from '@mui/material';
import { DataGrid, GridEventListener, GridToolbar } from '@mui/x-data-grid';
import { AttachMoneyOutlinedIcon, iconMap } from '@/components/common';
import { tokens } from '@/theme/theme';
import { AccountPill } from '../common/AccountWidget';

export const CategoriesTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
      flex: 0.5,
    },
    {
      field: 'title',
      headerName: 'Título',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },
    {
      field: 'icon',
      headerName: 'Ícono',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: ({ value }: any) => {
        const Icon = iconMap[value];
        return <Icon style={{ fontSize: '2rem' }} />;
      },
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
      title: 'internet',
      icon: 1,
      created_at: '12-05-2022',
    },
    {
      id: 2,
      title: 'comida',
      icon: 1,
      created_at: '12-05-2022',
    },
    {
      id: 3,
      title: 'ocio',
      icon: 1,
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
      // width="min(400px, 100%)"
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
        background: 'linear-gradient(to top, #232526ef, #2e2e2e7a)',
      }}
    >
      <DataGrid
        // loading={true}
        rows={rows}
        // @ts-ignore
        columns={columns}
        pageSize={25}
        onRowDoubleClick={handleOnRowDoubleClick}
        sx={{
          fontSize: '1rem !important',
        }}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};
