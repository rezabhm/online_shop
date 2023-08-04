import React from "react";
import { Container, IconButton, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox(){


    return(

        <Container maxWidth="md" sx={{ mt: 20 }}>
            <TextField
                id="search"
                type="search"
                label="What do you looking for?"
                onChange={()=>{
                    console.log('this is search')}}
                sx={{ width: 600 }}

                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">

                            <IconButton >

                                <SearchIcon />

                            </IconButton>

                        </InputAdornment>
                    ),
                }}
            />
        </Container>

    )
}

export default SearchBox;