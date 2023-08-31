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
import AccountDriver from "../Components/Account Driver/Account Driver";

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
        width:"300px",
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

            <Grid container xs={12}>
                <Grid container xs={12}>
                    <NavBar />
                </Grid>

                <Grid container xs={12}>

                    <Grid >
                        <AccountDriver />
                    </Grid>

                    <Grid container xs={12} sm={7} md={5} xl={5}>
                        <Box minWidth="400px"  sx={{width:"1100px" , height:"auto" , marginTop:"15%" , boxShadow:"0 0 10px 0 #e9e9e9", borderRadius:"6px" , backgroundColor:"#fbfbfb"}}>
                            <Typography variant="h5" color="#de4444" style={{margin:"35px 60px"}}>
                                Edite Your Profile
                            </Typography>

                            <Grid container xs={12}>
                                <Grid item xs={5}>
                                    <Typography style={{marginLeft:"60px"}}>
                                        First Name
                                    </Typography>
                                    <FormControl  variant="standard" sx={{margin:"5px 60px"}}>
                                        <BootstrapInput placeholder="Amir" id="bootstrap-input" />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={1}>

                                </Grid>

                                <Grid item xs={12} xl={3} fontWeight="bold" sx={{margin:"5px 60px"}}>
                                    <Typography>
                                        Last Name
                                    </Typography>
                                    <FormControl variant="standard" sx={{margin:"5px 0"}}>
                                        <BootstrapInput placeholder="Habibi" id="bootstrap-input" />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container xs={12} marginTop="15px">
                                <Grid item xs={5}>
                                    <Typography style={{marginLeft:"60px"}}>
                                        Email
                                    </Typography>
                                    <FormControl variant="standard" sx={{margin:"5px 60px"}}>
                                        <BootstrapInput placeholder="1111@email.com" id="bootstrap-input" />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={1}>

                                </Grid>

                                <Grid item xs={12} xl={3} fontWeight="bold" sx={{margin:"5px 60px"}}>
                                    <Typography>
                                        Address
                                    </Typography>
                                    <FormControl variant="standard" sx={{margin:"5px 0"}}>
                                        <BootstrapInput placeholder="Iran, Zanjan, ponak, 12" id="bootstrap-input" />
                                    </FormControl>
                                </Grid>
                            </Grid>
                                <Grid container xs={12}>
                                    <Grid item xs={12}>
                                        <Typography  sx={{margin:"20px 60px"}}>
                                            Password Changes
                                        </Typography>
                                        <BootstrapInput placeholder="Current Password" id="bootstrap-input" sx={{margin:"10px 60px"}}/>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <BootstrapInput placeholder="New Password" id="bootstrap-input" sx={{margin:"10px 60px"}}/>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <BootstrapInput placeholder="Confirm New Password" id="bootstrap-input" sx={{margin:"10px 60px"}} />
                                    </Grid>
                                </Grid>
                                {/*<Grid container xs={12} direction="row" sx={{paddingLeft:"390px"}} >*/}

                                {/*        <Typography margin="5px 5px">*/}
                                {/*            Cancel*/}
                                {/*        </Typography>*/}

                                {/*        <Button variant="contained" color="error">Save Change</Button>*/}

                                {/*</Grid>*/}
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