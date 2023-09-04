import NavBar from "../Components/Home/Navbar/NavBar";
import {Container} from "@material-ui/core";
import {Grid} from "@mui/material";
import AccountList from "../Components/AccountList/AccountList";
import EditProfile from "../Components/EditProfile/EditProfile";
import Footer from "../Components/Home/Footer/Footer";
import React from "react";
import ExpenseTracker from "../Components/expense tracker/Expense Tracker";
import BillingDetails from "../Components/Billing Details/BillingDetails";


function CheckOut(){
    return(
        <>
            <NavBar />

            <Container>

                <Grid container sx={{mt:"50px"}}>
                    <Grid
                        sx={{mr:{md:"50%" , lg:"0" , },width:{md:"300px"}}}
                        xs={12}
                        item
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                    >
                         <BillingDetails
title={"Billing Details"}
InputData=

{
    [
        {id:'1',label:"Firs Name"},
        {id:'2',label:"Company Name"},
        {id:'3',label:"Street Adress"},
        {id:'4',label:"Apartment"},
        {id:'5',label:"Town/City"},
        {id:'6',label:"Phone Number"},
        {id:'7',label:"Email Address"},

    ]
}/>
                    </Grid>
                    <Grid
                            sx={{mt:{lg:"10%"}}}
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                    >
                        <ExpenseTracker
                            sub={"$1750"}
                            ship={"Free"}
                            total={"$1750"}

                        />
                    </Grid>
                </Grid>

            </Container>

            <Footer />
        </>
    )
}

export default CheckOut