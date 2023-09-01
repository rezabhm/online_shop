import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';


function createData(model, price, Quantity, Subtotal) {
  return { model, price, Quantity, Subtotal };
}


const rows = [
  {model:'GamePad',
  img:'https://www.lg.com/africa_fr/images/tvs/md07531833/gallery/D01.jpg',
  price: "$500", 
  quantity:3, 
  subtotal:"$500"},

  {model:'LCD monitor',
  img:"https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
  price: "$650", 
  quantity:1, 
  subtotal:"$1000"
}

];
export const CartTable = () => {

  
  return (
    <>
    <TableContainer component={Paper} sx={{all:"unset"}}>
      <Table  aria-label="caption table" >
        
        <TableHead >
          <TableRow >
            <TableCell sx={{fontWeight:"bold",fontSize:'20px'}} align='left' >Product</TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:'20px'}} align='left' >Price</TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:'20px'}} align="left">Quantity</TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:'20px'}} align="left">Subtotal</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.id}  >
              
              <TableCell align='center'  component="th" scope="row" sx={{display:"flex" ,alignItems:"center"}}>
              <img style={{width:"90px",height:"5%",marginRight:"15px",}} src={row.img}/> 
                {row.model}
                 
                
                
              </TableCell>
             
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left"><input placeholder={row.quantity} style={{maxWidth:"6%",padding:"6px"}} type="number" /></TableCell>
     
              <TableCell align="left">{row.subtotal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}