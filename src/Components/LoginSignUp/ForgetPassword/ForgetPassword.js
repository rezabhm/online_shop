import {Button} from "@mui/material";

function ForgetPassword(){
    return(
        <>
            <Button onChange={()=> ("Done PassWord")}color="error">Forget Password ?</Button>
        </>
    )
}

export default ForgetPassword