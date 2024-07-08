import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableRow as STableRow, TableCell, TableBody, Paper, TablePagination, TableSortLabel, Select, MenuItem, FormControl, Chip, Checkbox, IconButton, Button } from '@mui/material';
import './Table.css';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { DeleteSharp } from '@mui/icons-material';

const CustomTable = ({ specialActionClicked, deleteClicked, editClicked, actions, columns, data, page, setPage, usePagination = true, checkbox, selectedIds, setSelectedIds, fromMenu, cellClicked }) => {
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [selectAll, setSelectAll] = useState(false);

  const TableRow = styled(STableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      // backgroundColor: 'rgb(228 28 255 / 20%);',
    },

    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnId);
  };

  // const handleStatusChange = (newValue, rowIndex) => {
  //   const updatedData = [...data];
  //   updatedData[rowIndex].is_active = newValue;
  //   setData(updatedData);
  // };

  const sortedData = data.slice().sort((a, b) => {
    if (orderBy && order === 'asc') {
      return a[orderBy] < b[orderBy] ? -1 : 1;
    } else if (orderBy && order === 'desc') {
      return a[orderBy] > b[orderBy] ? -1 : 1;
    }
    return 0;
  });

  const displayData = usePagination ? sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : sortedData;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {checkbox && !fromMenu &&
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  inputProps={{
                    'aria-label': 'select all desserts',
                  }}
                  checked={displayData.every(d => {
                    return selectedIds.includes(d.id);
                  })}
                  onChange={() => {
                    setSelectAll(!selectAll);
                    if (selectAll)
                      displayData.map((data) => {
                        setSelectedIds(prev => {
                          return [...prev, data['id']]
                        })
                      })
                    else
                      setSelectedIds([]);
                  }}
                />
              </TableCell>
            }
            {columns.map((column) => {
            

              return <TableCell key={column.id} style={{
                color: 'white',
                fontWeight: 'bold'
              }}>
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={orderBy === column.id ? order : 'asc'}
                  onClick={() => handleSort(column.id)}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
})}
          </TableRow>
        </TableHead>
        <TableBody>
          {displayData.length == 0 && <TableCell scope='row'>No Data Available</TableCell>}
          {displayData.map((row, index) => (
            <TableRow key={index}>
              {checkbox &&
                <TableCell padding="checkbox" >
                  <Checkbox
                    color="secondary"
                    checked={selectedIds.includes(row['id'])}
                    onChange={() => {
                      if (!selectedIds.includes(row['id']))
                        setSelectedIds([...selectedIds, row['id']]);
                      else
                        setSelectedIds(selectedIds.filter(d => d != row['id']));
                      console.log(selectedIds, row['id']);
                    }}
                    inputProps={{
                      'aria-label': 'select all desserts',
                    }}
                  />
                </TableCell>
              }
              {columns.map((column) => {
                let val = row[column.id];

                return (
                  <TableCell key={column.id} onClick={() => cellClicked && cellClicked(val)}>
                    {Object.keys(column).includes('hyperLink') ? <a style={{
                      cursor: 'pointer',
                      color: 'blue' 
                    }}>{row[column.id]}</a>: row[column.id]}
                    {/* {column.id == 'proposalNumber' && !Object.keys(column).includes('hyperLink') && <a style={{
                      cursor: 'pointer',
                      color: 'blue' 
                    }}>{row[column.id]}</a>} */}
                    
                    {column.id === 'vendor_status' ? (row[column.id] ? 'Active' : 'Inactive') : ''}
                    {column.id == 'actions' &&
                      <div>
                        <IconButton onClick={() => { editClicked(row); }} size='small'>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => { deleteClicked(row); }} size='small'>
                          <DeleteSharp />
                        </IconButton>
                      </div>
                    }
                    {column.id == 'special_action' &&
                      <div>
                        <Button variant='outlined' color='secondary' onClick={() => { specialActionClicked(row); }}>Generate QR</Button>
                      </div>
                    }
                  </TableCell>
                );
              })}


            </TableRow>
          ))}
        </TableBody>
      </Table>
      {usePagination && <TablePagination
        rowsPerPageOptions={[7, 14, 21]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />}
    </TableContainer>
  );
};

export default CustomTable;