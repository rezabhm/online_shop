import {
    alpha,
    Box,
    Button,
    FormControl,
    Grid,
    InputBase,
    InputLabel,
    styled,
    TextField,
    Typography
} from "@mui/material";
import Routing from "../Components/ProductPage/Routing/Routing";
import NavBar from "../Components/Home/Navbar/NavBar";
import Footer from "../Components/Home/Footer/Footer";
import * as PropTypes from "prop-types";

// function BootstrapInput(props) {
//     return null;
// }
//
// BootstrapInput.propTypes = {
//     defaultValue: PropTypes.string,
//     id: PropTypes.string
// };

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F5F5F5' : '#1A2027',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        fontSize: 16,
        padding: '12px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),

    },
}));




function Account(){
    return(
        <>
            <NavBar />
            <Grid container xs={12}>
                <Grid container xs={12}>

                </Grid>

                <Grid container xs={12}>

                    <Grid container xs={3} style={{display:"flex",flexDirection:"column" , margin:"7% 130px" ,cursor:"pointer"}}>
                        <Routing />
                        <Typography variant="h6" sx={{marginTop:"50px"}}>
                            Manage My Account
                        </Typography>
                        <Box padding="20px" >
                            <Typography color="red" marginBottom="5px">
                                My Profile
                            </Typography >
                            <Typography color="gray" marginBottom="5px">
                                Address Book
                            </Typography>
                            <Typography color="gray">
                                My Payment Options
                            </Typography>
                        </Box>

                        <Typography variant="h6" sx={{marginTop:"5px"}}>
                            My Orders
                        </Typography>
                        <Box padding="20px" lineHeight="1.2vh">
                            <Typography color="gray" marginBottom="5px" >
                                My Returns
                            </Typography >
                            <Typography color="gray" marginBottom="5px">
                                My Cancellations
                            </Typography>
                        </Box>
                        <Typography variant="h6" sx={{marginTop:"5px"}}>
                            My WishList
                        </Typography>
                    </Grid>

                    <Grid container xs={6}>
                        <Box sx={{width:"100%" , height:"auto" , marginTop:"15%" , boxShadow:"0 0 10px 0 #e9e9e9", borderRadius:"6px" , backgroundColor:"#fbfbfb"}}>
                            <Typography variant="h5" color="#de4444" style={{margin:"35px 60px"}}>
                                Edite Your Profile
                            </Typography>

                            <Grid container xs={12}>
                                <Grid item xs={5}>
                                    <Typography style={{marginLeft:"60px"}}>
                                        First Name
                                    </Typography>
                                    <FormControl  variant="standard" sx={{margin:"5px 60px"}}>
                                        <BootstrapInput placeholder="Amir" id="bootstrap-input" sx={{width:"250px"}}/>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={1}>

                                </Grid>

                                <Grid item xs={6} fontWeight="bold">
                                    <Typography>
                                        Last Name
                                    </Typography>
                                    <FormControl variant="standard" sx={{margin:"5px 0"}}>
                                        <BootstrapInput placeholder="Habibi" id="bootstrap-input" sx={{width:"250px"}}/>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container xs={12} marginTop="15px">
                                <Grid item xs={5}>
                                    <Typography style={{marginLeft:"60px"}}>
                                        Email
                                    </Typography>
                                    <FormControl variant="standard" sx={{margin:"5px 60px"}}>
                                        <BootstrapInput placeholder="1111@email.com" id="bootstrap-input" sx={{width:"250px"}}/>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={1}>

                                </Grid>

                                <Grid item xs={6} fontWeight="bold">
                                    <Typography>
                                        Address
                                    </Typography>
                                    <FormControl variant="standard" sx={{margin:"5px 0"}}>
                                        <BootstrapInput placeholder="Iran, Zanjan, ponak, 12" id="bootstrap-input" sx={{width:"250px"}}/>
                                    </FormControl>
                                </Grid>
                            </Grid>
                                <Grid container xs={12}>
                                    <Grid item xs={12}>
                                        <Typography  sx={{margin:"20px 60px"}}>
                                            Password Changes
                                        </Typography>
                                        <BootstrapInput placeholder="Current Password" id="bootstrap-input" sx={{width:"77%" , margin:"10px 60px"}}/>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <BootstrapInput placeholder="New Password" id="bootstrap-input" sx={{width:"77%",margin:"10px 60px"}}/>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <BootstrapInput placeholder="Confirm New Password" id="bootstrap-input" sx={{width:"77%",margin:"10px 60px"}} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={12} direction="row" sx={{paddingLeft:"400px"}} >

                                        <Typography textAlign="center">
                                            Cancel
                                        </Typography>

                                        <Button variant="contained" color="error">Save Change</Button>


                                </Grid>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container xs={12} style={{marginTop:"30%"}}>
                    <Footer />
                </Grid>
            </Grid>
        </>
    )
}

export default Account