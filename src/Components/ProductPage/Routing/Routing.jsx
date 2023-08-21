import {Button, Grid, Link} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';

function Routing(){

    const data=[
        {rout:'Account' , pushLink:'/eee'},
        {rout:'Gaming' , pushLink:'/ewsee'},
        {rout:'Havic HV G-92 Gamepad' , pushLink:'/esee'},
    ]

    const myArray = ['Account', 'Gaming', 'Havic HV G-92 Gamepad'];

    const myList = data.map((item) => <Link href={item.pushLink}><Button style={{color:"gray"}}>{item.rout} /</Button></Link>)

    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(myList);

    return(
        <>
            <div>

            </div>
        </>
    )
}

export default Routing