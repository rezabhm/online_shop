import {
    FormControl,
    Grid,
    IconButton, Input, InputAdornment,
    InputLabel, OutlinedInput,
    TextField,
} from "@mui/material";
import * as React from "react";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import GoogleOAuth from "../SignupWithGoogle/SignupWithGoogle";
import Header from "../Header/Header";

export default function LoginForm() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }



        return (
            <>

                <Grid container xs={12} spacing={3} sx={{padding:"60px"}}>
                    <Header
                        title={"Log in to Exclusive"}
                        title1={"Enter your details below"}

                    />
                    <Grid item xs={12}>
                        <TextField

                            onChange={()=> ("Done PassWord")}
                            id="standard-basic"
                            label="UserName"
                            variant="standard"
                            sx={{width: "100%"}}
                        />
                    </Grid>

                    <Grid item xs={12}>

                        <FormControl sx={{  width: '100%'  }} variant="standard">
                            <InputLabel onChange={()=> ("Done PassWord")} htmlFor="standard-adornment-password">PassWord</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={12}>
                        
                    </Grid>
                    <Grid item xs={12}>
                        <ForgetPassword />
                    </Grid>
                </Grid>


            </>
        )

}
