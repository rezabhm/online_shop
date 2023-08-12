import { height } from '@mui/system';
import React from 'react'
import AdimgData from './AdimgData'

const Imgcomponent = (props) => {

console.log(props);


if(props.type=== "image"){
  return(
<img src= {props.image} style={{width:"560" ,height:"330px" }}/>
  )
}



}

export default Imgcomponent
