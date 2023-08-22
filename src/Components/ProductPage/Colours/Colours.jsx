import * as React from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import {Grid, Typography} from "@mui/material";

export default function Colours() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (

           <Grid container xs={12}>
                <Grid item xs={6}>


                    <Typography>
                        Colours :
                    </Typography>
                </Grid>
                <Grid item xs={6}>

                    <Radio {...controlProps('c')} color="warning" />
                    <Radio
                    {...controlProps('e')}
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                    }}
                    />
                </Grid>

           </Grid>

    );
}