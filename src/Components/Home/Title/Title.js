import { Typography } from "@mui/material"



function Title(props){
    return(
        <>

                <Typography sx={{    backgroundColor: "rgba(211, 211 , 211 , 0.4)",
    width: "90%", 
    height: "30px",
    color: "#DB4444",
    marginLeft: "10px",
    borderLeft: "25px solid #DB4444",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px"}} className='title-home'>{props.title}</Typography>
        </>
    )
}

export default Title