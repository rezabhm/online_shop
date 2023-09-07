import {Button, Grid, Typography} from "@mui/material";
import NavBar from "../Components/Home/Navbar/NavBar";
import Routing from "../Components/ProductPage/Routing/Routing";


function NotFound(){
    return(
        <>
            <NavBar />
            <Grid container xs={12} >
                <Grid container xs={12} sx={{m:"40px"}}>
                    <Routing />
                </Grid>
                <Grid container xs={12} sx={{display:"flex" , flexDirection:"column" , m:"100px"}}

                >
                    <Typography variant="h1" sx={{textAlign:{xs:"center",},whiteSpace:{xs:"nowrap"},margin:"auto"}}>
                        404 Not Found
                    </Typography>

                    <Typography sx={{textAlign:"center"}}>
                        Your visited page not found. You may go home page.
                    </Typography>
                    <Button sx={{width:{xs:"40%" , md:"40%" , lg:"15%"},whiteSpace:{xs:"nowrap"}, margin:"auto" , mt:"50px" ,backgroundColor:"#cb1735" , padding:"20px"}} variant="contained" >Back to home page</Button>
                </Grid>

            </Grid>

        </>
    )
}
export default NotFound