import React from "react";
import {Grid} from "@mui/material";
import AdImageBox from "./AdImageBox";

function AdDescriptionImage(props){


    return(

        <>

            <Grid container spacing={5}>

                <Grid item xs={6}>

                    <AdImageBox

                        img={props.imageL.url}
                        title={props.imageL.title}
                        text={props.imageL.description}
                        pushLink={props.imageL.pushLink}
                        size={'big'}

                    />

                </Grid>




                <Grid item xs={6} >

                    <Grid item xs={12}>
                        <AdImageBox

                            img={props.imageRT.url}
                            title={props.imageRT.title}
                            text={props.imageRT.description}
                            pushLink={props.imageRT.pushLink}
                            size={'big'}

                        />
                    </Grid>


                    <Grid container  spacing={2}>


                        <Grid item xs={6} >
                            <AdImageBox

                                img={props.imageRL.url}
                                title={props.imageRL.title}
                                text={props.imageRL.description}
                                pushLink={props.imageRL.pushLink}
                                size={'small'}

                            />
                        </Grid>



                        <Grid item xs={6} >
                            <AdImageBox

                                img={props.imageRR.url}
                                title={props.imageRR.title}
                                text={props.imageRR.description}
                                pushLink={props.imageRR.pushLink}
                                size={'small'}

                            />
                        </Grid>


                    </Grid>





                </Grid>


            </Grid>



        </>

    )



}
export default AdDescriptionImage;