import React from 'react'

const ProductImgList = (props) => {

  return (
    <div style={{ textAlign:"center",backgroundColor:"#F5F5F5",marginBottom:"10px" }}>

<img style={{width:"122px" , height:"121px"}} src={props.image} />

    </div>
  )
}

export default ProductImgList
