import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    minwidth: 90,  
    flex: 1,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    minwidth: 150,
    editable: true,
    flex: 1,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    minwidth: 150,
    editable: true,
    flex: 1,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    minwidth: 110,
    editable: true,
    flex: 1,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minwidth: 160,
    flex: 1,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
