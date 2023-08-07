import React, {useEffect, useState} from "react";
import {Button, Link} from "@mui/material";

function NavButton(props){

    const [style, setStyle] = useState({

        color: 'rgba(0,0,0,1)',
        backgroundColor: 'rgba(0,0,0,0)',
        alignItems:'center',
        justifyContent:'center',
        display:'flex'

    })

    useEffect(()=>{

        if (props.status === true) {

            setStyle({

                color: 'rgba(0,0,0,1)',
                backgroundColor: 'rgba(0,0,0,0)',
                borderBottom:'3px solid rgba(0,0,0,.5)',
                alignItems:'center',
                justifyContent:'center',
                display:'flex'
            })

        }




    }, [props.status])


    return(

        <Link href={props.pushLink} style={{

            alignItems:'center',
            justifyContent:'center',
            display:'flex'



        }}>

            <Button

                style={style}


            >{props.text}</Button>

        </Link>

    )



}

export default NavButton;