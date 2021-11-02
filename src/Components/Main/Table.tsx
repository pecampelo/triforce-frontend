import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name: string, institution: string, account: string, agency: string) {
  return { name, institution, account, agency};
}

const rows = [
  createData('João da Silva', 'Itaú', '1234550-0', '1234'),
  createData('Maria de Paula', 'Bradesco', '09684-4', '127'),
  createData('Carlos de Moraes', 'Nubank', '444409-3', '333'),
  createData('Kimberly Borges', 'Nubank', '78961-7', '344'),
  createData('Malvado da Bondade', 'Citi', '00932-2', '163'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pessoas Físicas</TableCell>
            <TableCell align="right">Instituição</TableCell>
            <TableCell align="right">Conta</TableCell>
            <TableCell align="right">Agency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.institution}</TableCell>
              <TableCell align="right">{row.account}</TableCell>
              <TableCell align="right">{row.agency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
