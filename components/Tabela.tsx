import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import DescriptionIcon from '@material-ui/icons/Description';
import CreateIcon from '@material-ui/icons/Create';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  email: string,
  data: string,
  hora: string,
  pedido: number,
  metodo: string

) {
  return { name, email, data, hora, pedido, metodo};
}

const rows = [
  createData('Leticia', 'leticia@leticia.com', '07/10/2020', '15:12', 1234, 'dinheiro'),
  createData('Leticia', 'leticia@leticia.com', '07/10/2020', '15:12', 1234, 'dinheiro'),
  createData('Leticia', 'leticia@leticia.com', '07/10/2020', '15:12', 1234, 'dinheiro'),
  createData('Leticia', 'leticia@leticia.com', '07/10/2020', '15:12', 1234, 'dinheiro'),
  createData('Leticia', 'leticia@leticia.com', '07/10/2020', '15:12', 1234, 'dinheiro')
];

export default function CustomizedTables() {
  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="center">E-mail</StyledTableCell>
            <StyledTableCell align="center">Data</StyledTableCell>
            <StyledTableCell align="center">Horario</StyledTableCell>
            <StyledTableCell align="center">N° do Pedido</StyledTableCell>
            <StyledTableCell align="center">Metodo de Pagamento</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" sx={{display:'flex'}} >
              <Avatar sx={{ bgcolor: '#005aff', width: '23px', height: '23px',  fontSize:'23px', marginRight:'10px' }}>L</Avatar>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center"> {row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.data}</StyledTableCell>
              <StyledTableCell align="center">{row.hora}</StyledTableCell>
              <StyledTableCell align="center">{row.pedido}</StyledTableCell>
              <StyledTableCell align="center">{row.metodo}</StyledTableCell>
              <StyledTableCell align="center" sx={{display:'flex'}} >  <CreateIcon  />  <DescriptionIcon sx ={{marginRight:'20px'}} />  </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}