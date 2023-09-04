import {Box} from "@mui/system";
import {Button, FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, TextField, Typography} from "@mui/material";
import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import item from "../Home/ImageViewer/Item";
import Radio from "@mui/material/Radio";
import Coupon from "../coupon/Coupon";


function ExpenseTracker(props){
const Data =[
    {
        img:"https://gmedia.playstation.com/is/image/SIEPDC/ps4-accessories-ds4-midnight-blue-screen-01-en-28oct20?$1600px$",
        model:"LCD Monitor",
        price:"$650"
    },

    {   img:'https://www.lg.com/africa_fr/images/tvs/md07531833/gallery/D01.jpg',
        model:"H1 Gamepad",
        price:"$1100"
    },


]
    let handleChange;
    return(
        <>
            <Box sx={{width:"527px" , height:"600px"}} >

                <Grid container xs={9} sx={{display:"flex"}} spacing={0}>
                    {Data.map((item)=>{
                      return  <Grid xs={12} sx={{display:"flex" ,alignItems:"center",justifyContent:"space-between" , mb:"10px"}}>
                          <img style={{width:"100px",height:"100%"}} src={item.img}/>
                          <Typography>
                              {item.model}
                          </Typography>

                          <Typography>
                              {item.price}
                          </Typography>
                        </Grid>
                    })}
                </Grid>
                    <Grid container xs={9} sx={{display:"flex" ,}}>

                            <Grid  xs={12} style={{display:"flex",justifyContent:"space-between" , borderBottom:"1px solid #000"}}>
                                <Typography mb="10px">
                                    Subtotal :
                                </Typography>
                                <Typography mb="10px">
                                    {props.sub}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sx={{display:"flex",justifyContent:"space-between" , borderBottom:"1px solid #000" , mt:"10px" }}>
                                <Typography mb="10px">
                                    Shiping :
                                </Typography>
                                <Typography color="red">
                                    {props.ship}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sx={{mt:"10px" , display:"flex",justifyContent:"space-between"}}>
                                <Typography >
                                    Total :
                                </Typography>
                                <Typography>
                                    {props.total}
                                </Typography>
                            </Grid>
                    </Grid>
                            <Grid container xs={9} mt="20px">
                                <Box >
                                    <FormControl >
                                        <RadioGroup
                                            defaultValue="Bank">

                                                <Grid container xs={9} sx={{display:"flex", justifyContent:"space-between"}}>
                                                    <FormControlLabel value="Bank" control={<Radio />} label="Bank" />
                                                    <img style={{width:"50px" , height:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCq10gCm5KCivh3ygy2nJK9G7LMZ3q23Q1-lVcKlnVFQ&s" alt=""/>
                                                    <img style={{width:"50px" , height:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHw5oGZeCP70vx9Q7ADZfKIAH8oSobdkHvxRlpO4vJVA&s" alt=""/>
                                                    <img style={{width:"50px" , height:"100%"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAAB6CAMAAAAF6AYEAAAAxlBMVEX///8AMIcCcOAAHGQAbuAAa98AAHoAK4UAad8ALoYAJIPNzd0AIYIALoPn6fEAH2kAZd7z9Pjn7vpJg+Pw9PxVh+RJU5YAYN0AF38AKIRocaYAAEoAG4AAEn4Cee/Z5PjN2PUACHxVW5kAXN1BR5FAe+IAV9zX2+dolua7z/LDxtm7v9UAKHeDqeokNIiao8OWtO0ADVVhjuUvPYx8hbGnrsqGkrlbZ6F7n+gbJ3EPXcS2yPFve6wUQJInQ4+jvu4AUrEBRqLNCymPAAAJF0lEQVR4nO1a6XriuBI1jPEGTWx2M6Yxi8MWAmHNhCTMvP9LXVtVWgBhuCHd+TKj8yOfbSRZRyqdWhxNU1BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQOEExf4pB0fvqaX0CHo1TOP3mrPjVE7sVeSMjgekU/NVXT+1GrFsyZjHs1nL81ZO7CavCGWaZjOOsv3p2t6BrnmWWsTuTr57ex+HVUphlzPfvqyPFvp3CLNP4vjIyTuMVo/NtN219XkAIgs1Xz/CjmDXSmZm1r57hRyGK/o9jxM/sZao5ekUBnxORVUoCKtf38w57eFuHE7s7xYP9OEgZrdisCehuN2mNr0RZRHUxbV/ZbxolHaJnpFZ85KJ/94cMf6W5tIFhivALxvutcUvpXj+A1dPDq/qVc6T5EC2nKESND1Jmdy/z88ONT4JOv3WjnxjVs0fQ3ekV/dqRnjS2aFsxHpbv2Z3uDs9a+0wSdN5Ibe4eM8tm3eHlfiEhlrXoPghT+yFn9hAPXD1HrSnzGZ2bHMUid8ose8Wu7WBFcju8fw04MymxP95+xgM/nxnuHU6pDcCB7M4tOgJGdQzroo7QvQ4Pp3ae2Z8vZOCdfLgOUMk8JrALyK2w/TixSoSHC/5ayNO6aI/PFmkYlfBeOCdyAXmAPZbbI+pPsCoOYow3GdxC/+MhWRuZTNsJRlOkmL2/4Cy9MlhxRO8bF5g9/Y2GHsqGQ/1huc7AQGYfT35GwKROjSREI+tJJyAww2O2wPsxP2YZ+SlLPcIYmhmDoweFGX3fYDLbbNYDsoceAbsQN8Fjj+ZgVLkR/WkKD9w93lfao/l0vmsTI6oQJFelHjSj0ijGw1JmzKdEmgSvEMAUmPGhf0Nm3mxbMFqNRsfozjxttW0myGt5uGhynSmu4EmziET0iCkG+jdkVtkvrLrruvVede5p88UwxiLkzdher5x0Zi9MnO5lzCAf92uM2QQkBaoM62XgoKb4jVreLDgxjIk29uFqxsbZdJIHTiMeaAjMqlQItJ045X3Wok4h55ZHZSsXg5BGaezRFWn6qcfs72wqswrk406TGdaKWLdtxiGW1zTEnNZvwV2Q1zTo5ndpNzyeGWeslar6wXHRkCqZcmV4EJ/ors6FfgiMezim101h9iTsmJzZ4J3MlqdwxcAGZl4cagtHmMNcDmh+YbOktguWEzSZNOaYAy1ZqCDxddXKSpHsU3R4aAb9lHj47aC3K2E2Bucc0ApXsQ8LVYinuJXnfX63yPaog/3wsJtBvN5tEAKL6kU7gr1IYoWhJO6ibCpwzdze2OcGc8Ds6e7t5afYXTAPDixVmpukYD6ebEy0gFgr1zQedTqG0eLr5zSTjnD8/NrBepAFwlNlzcMEuyk9Vlao7emO5dx6XSCplzW210waxx2+mk9/Ujz99SYcMOyylzBDjbdJBPIYBLhMjWY8WyBjGt11Pr92WEBQIOEyHseAHIpNC3czuZse7ItFycR7UaFhyX15F4bzHGtoJZZ77AbFePjlp4CTLZfFbR6Nh8WgESp5M1gyp4bKPqMaDP5gAO8tJLtUxNWFYLMsi4djTiXK2SrjTKa0JUgjrIFF3eArc2f2P7IRObGhJLjxalx/OGwjr3mQzwrVStiljO2QxLQIPZ3X+BqTesx9TpIzQsyNJ4wePMvcwTPVllDTTtwgn5p9Yn+HzGQRcbEgKVU6wYRJBI9NNA/jLgcegTqasf+aoHxgueVe8vKcPmJRlhDllWhEGccgHoi+Xi7R17Gp/XiRDMnHrkqIHeTjCN/YJlOHowNqgYCtsR24mxDpsoOxt/S5YTJpPNywapttiiWmU2Wglqh2Ca5zVBo9YWppzPS6NDuaYHc7KYEkfwJjuSZWCwewJX7vAMM3l/jmRxtaUPnA2t+OWiOvgmT3JC6ETbFEIQMfTlb92A3mr2TmyrOzTQMNqQ+obfL4CyhjRyz2QExQeD0gar9RP4EHEsNfPUKUpyF2gFQ7J85EKHyE1FngT4I0pglIXab4Gjv78ayOQ/cl2ZGDDzmwiC0aK+Ki4mlo0ShmyOKloyE9ZCZMBc8ZkUbca/dUGjNvclLJYL0zxDSwKNM+/QUydbFwjotoULKeI6iP36cailGjJM8FZpaQTKHnridsMB526anhsdWPc3uG51cGnFyhefoTOjqDiX7etI+erISwMqB8S2hgkrILRry89jjShXi4ijEY/ZF/YDLlop+rR/uzFbkBMGtIKlUzqgtIZNJ3UGt4vsOZOV36MITXupIKJ3XFVNfDLFIlLgyPZ5ZO7ZExswUB0XMU+mKUUlefwGxln0WpP/AfN0XPGzcdFAqeuAjBOI/5tR1OX2L/bVTNXHba1iqjId2x3CKZIrhBHg+bfM8EYtF+RBBeKIRtwORaeclvWxp3BeR/MOh7AqHI+koDroBnoHsMBkeSISMWTfXue3WWzxChbx+VCmZcQB54pGilFLsPgFmW9IvGRBaexJbLSWhrTHPMPi90YWwYydY0lAZeoCm0VEBXZMNN/R/OLCdbMAk8yMdJwnWKjfR/MRqC76YWa3Cvh9KuR9IKnKwsjnHflOfdBFz0RWnUr/yqQ6PaprwQuOoIu2bSNwm+G0swgVB1rYA0koRLgqkYeulojyQJWeCho1Fjt8C+DonSeOX3vcGjk3Q9+4l+3QnIObZtv7Nc+eQ1S265eUh6bV8wZvzAdLYePK/TkrHu6nOXNHYTAcEPTGWqdzP+TY9Lo7z8JmO27RKcLZp6m+4y6LQKy+1aG9dIW74KHvoBQT7iPStXE5TPngdvWo0s17WixV4LoXGS63vP5LrMFYJ/h12wzwSXC+jsNSf10JMWg0mMAW/Mf8LU1Hw/6O/xyugZVNq73W5EDozY9my/SpUxk3nJz8eAxiQyl/GZaPNPO/XwF78rAa0zBK+X296GkOtHr3S5+c2YNCCYXn7CB/t07LirsP6P/1P4KGguLzruX4Q9Y5Yr/4Z/s10ZhQSt/q9/1ZSFYbIE4tMxax5/jPlV8KqsyietmH5fVLiAnCl5fFdUeJXv2nj4m6Di9uqAXvV3iP5vRDuk+JcRU1BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD4z+N/843au+P5nNQAAAAASUVORK5CYII=" alt=""/>
                                                </Grid>
                                            <FormControlLabel sx={{mt:"10px"}} value="Cash on delivery" control={<Radio />} label="Cash on delivery" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            </Grid>
                <Grid container  >

                    <Box sx={{display:"flex",}}>

                        <TextField  sx={{width:"300px"}} id="outlined-basic" label="Coupon Code" variant="outlined" />



                        <Button  variant="contained" sx={{height:"55px", marginLeft:"15px" ,backgroundColor:"#b21937"}}>Apply Coupon</Button>
                    </Box>
                </Grid>
                <Button sx={{mt:"20px" , backgroundColor:"#d21937"}} variant="contained">Place Order</Button>
            </Box>

        </>
    )
}

export default ExpenseTracker