import { Button } from '@mui/material'
import React from 'react'

const CartButton = (props) => {
  return (
    <>
    <Button sx={{fontWeight:"bold",padding:"10px" ,color:"#000000",borderRadius:'7px',fontSize:"15px"}}>{props.text}</Button>
    </>
  )
}

export default CartButton