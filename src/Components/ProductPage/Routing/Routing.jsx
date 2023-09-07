// import {Breadcrumbs, Button, Grid, Link, Typography} from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ProductReview from "../product review/Product Review";

// function handleClick(event) {
//     event.preventDefault();
//     console.info('You clicked a breadcrumb.');
// }

// function Routing(){

//     const data=[
//         {rout:'Account' , pushLink:'/eee'},
//         {rout:'Gaming' , pushLink:'/ewsee'},
//         {rout:'Havic HV G-92 Gamepad' , pushLink:'/esee'},
//     ]
    
//     const myArray = ['Account', 'Gaming', 'Havic HV G-92 Gamepad'];
    
//     const myList = data.map((item) => <Link href={item.pushLink}><Button style={{color:"gray"}}>{item.rout} /</Button></Link>)
    
//     const container = document.getElementById('root');
//     const root = ReactDOM.createRoot(container);
//     root.render(myList);

//     return(
//         <>
//             <div role="presentation" onClick={handleClick}>
//                 <Breadcrumbs aria-label="breadcrumb">
//                     <Link underline="hover" color="inherit" href="/">
//                         Home
//                     </Link>
//                     <Link
//                         underline="hover"
//                         color="inherit"
//                         href="/material-ui/getting-started/installation/"
//                     >
//                         Games
//                     </Link>
//                     <Typography color="text.primary">Shop</Typography>
//                 </Breadcrumbs>
//             </div>

//         </>
//     )
// }

// export default Routing