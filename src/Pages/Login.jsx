import LoginForm from "../Components/LoginSignUp/LoginForm/LoginForm";
import SignupLoginImage from "../Components/LoginSignUp/SignupLoginImage/SignupLoginImage";
import {Grid} from "@mui/material";
import SignupForm from "../Components/LoginSignUp/SignupForm/SignupForm";
import Header from "../Components/LoginSignUp/Header/Header";
import NavBar from "../Components/Home/Navbar/NavBar";
import Footer from "../Components/Home/Footer/Footer";


function Login(){
    const ss1={alignItems:'center', justifyContent:'center',display:'flex',padding:"10%"};

    return(
        <>
            <Grid container >
                <Grid item xs={12}>
                    <NavBar />
                </Grid>
                <Grid item xs={12} sx={ss1}>

                    <Grid container xs={12}>

                        <Grid container xs={6} >

                            <SignupLoginImage
                                img={"https://cdni.iconscout.com/illustration/premium/thumb/login-access-protection-5379568-4500319.png"}
                            />
                        </Grid>

                        <Grid container xs={6} sx={ss1} spacing={0}>

                            <Grid item xs={12} >

                                <Header
                                    title={"Log in to Exclusive"}
                                    title1={"Enter your details below"}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <LoginForm />
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>



        </>
    )
}

export default Login