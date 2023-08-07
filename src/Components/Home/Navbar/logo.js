import React from "react";


function Logo(props){


    return(

        <>

            <h1 style={{alignItems:'center', justifyContent:'center', display:'flex'}}>

                {props.title}

            </h1>

        </>



    )

}

export default Logo;