import React from "react";
import {Drawer, Grid} from "@mui/material";
import NavBar from "../Components/Home/Navbar/NavBar";
import CategoryList from "../Components/Home/CategoryList/CategoryList";
import ImageViewer from "../Components/Home/ImageViewer/ImageViewer";
import Title from "../Components/Home/Title/Title";
import {Cdate} from "../Components/Home/CategoryList/CategoryData";
import DescriptionTitle from "../Components/Home/DescriptionTitle/DescriptionTitle";
import PageInatationButton from "../Components/Home/PageIantationButton/PageInatationButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CategorySignButton from "../Components/Home/CategorySignButton/CategorySignButton";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Product from "../Components/Home/Product/Product";
import AdDescriptionImage from "../Components/Home/AdDescriptionImage/AdDescriptionImage";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import FeaturesIcons from "../Components/Home/FeaturesIcons/FeaturesIcons";
import Footer from "../Components/Home/Footer/Footer";
import AdImage from "../Components/Home/AdImage/AdImage";
import Container from "@mui/material/Container/Container";
import Box from "@mui/material/Box/Box";
import { useState } from "react";

function Home(){


const [showlist,setShowlist]=useState(false)


    return(

        <>

            {/* <Grid container spacing={3} >

                <Grid item xs={12}>

                    <NavBar />

                </Grid>

                <Grid item xs={1}>
                    <></>
                </Grid>

                <Grid container xs={10} spacing={0}>



                    <Grid item xs={3} style={{borderRight:'1px solid rgba(0,0,0,0.5)'}} >

                        <CategoryList data={Cdate} />

                    </Grid>

                    <Grid item xs={9} style={{alignItems:'center', justifyContent:'center',display:'flex'}} >

                        <ImageViewer images={[

                            'https://www.cnet.com/a/img/resize/f50380cfa8e6dd0a60ff6dc090e7d8d1145ded7c/hub/2022/10/11/28f6b83c-0e42-4603-ae6f-78da24661635/dell-xps-13-2022-a.jpg?auto=webp&fit=crop&height=360&width=640',
                            'https://media.cnn.com/api/v1/images/stellar/prod/211014164958-best-laptops-surface-pro-8.jpg?q=w_3761,h_2116,x_0,y_0,c_fill',
                            'https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg',
                            'https://w0.peakpx.com/wallpaper/601/760/HD-wallpaper-apple-macbook-laptop-on-black-background-modern-technology-laptop-apple.jpg',
                            'https://4kwallpapers.com/images/wallpapers/macbook-pro-apple-event-2020-dark-background--3278.jpg',



                        ]} />

                    </Grid>

                    <Grid container spacing={2} xs={12} sx={{mt:'5%'}}>

                        <Grid item xs={12} >

                            <Title title={"Categories"} />

                        </Grid>

                        <Grid item xs={10}>

                            <DescriptionTitle title={'Brows By Category'} />

                        </Grid>


                        <Grid item xs={2} >

                            <PageInatationButton

                                data={ [
                                    { id: 1, icon: <ArrowBackOutlinedIcon />, onClick:()=>{
                                            console.log('left button click')} },
                                    { id: 2, icon: <ArrowForwardOutlinedIcon /> , onClick:()=>{
                                            console.log('right button click')}},

                                ]}

                            />


                        </Grid>

                        <Grid item xs={12} sx={{

                            width:'100%',
                            mb:'2.5%'


                        }}>

                            <CategorySignButton

                                data={
                                    [
                                        { id: 0, icon: <PhoneAndroidOutlinedIcon />, text: "Phones", colors: "white",},
                                        { id: 1, icon: <ComputerOutlinedIcon />, text: "Computer", colors: "white" },
                                        { id: 2, icon: <WatchOutlinedIcon />, text: "SmartWatch", colors: "white" },
                                        { id: 3, icon: <CameraAltOutlinedIcon />, text: "Camera", colors: "white" },
                                        { id: 4, icon: <HeadsetOutlinedIcon />, text: "HeadPhones", colors: "white" },
                                        { id: 5, icon: <SportsEsportsOutlinedIcon />, text: "Gaming", colors: "white",},

                                    ]
                                }

                            />


                        </Grid>


                        <Grid item xs={3} height={'450px'}>

                            <Product

                                image={'https://dkstatics-public.digikala.com/digikala-products/8099c937b4123c121bb12e9b187a8e387ebba7c0_1630239758.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'}
                                title={'Abzar'}
                                price={100}
                                star={4}
                                rateNumber={25}

                            />

                        </Grid>


                        <Grid item xs={3} height={'450px'}>

                            <Product

                                image={'https://dkstatics-public.digikala.com/digikala-products/2eecca1433de7975e17cb014f7fd52ea1fcb1391_1672484382.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'}
                                title={'Mobile'}
                                price={250}
                                star={3.5}
                                rateNumber={50}

                            />

                        </Grid>

                        <Grid item xs={3} height={'450px'}>

                            <Product

                                image={'https://dkstatics-public.digikala.com/digikala-products/020e3fa8992d67c365e64db17c3558e20ada81c8_1635154901.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'}
                                title={'Tala'}
                                price={1500}
                                star={5}
                                rateNumber={250}

                            />

                        </Grid>


                        <Grid item xs={3} height={'450px'}>

                            <Product

                                image={'https://dkstatics-public.digikala.com/digikala-products/c34c67f153547c2a5e7092cb83a83f36b1e78794_1658835829.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'}
                                title={'chador'}
                                price={75}
                                star={1}
                                rateNumber={10}

                            />

                        </Grid>


                    </Grid>

                    <Grid item xs={12} sx={{

                        mt:'10%'

                    }}>

                        <AdImage

                            img={"https://e0.pxfuel.com/wallpapers/3/947/desktop-wallpaper-headphones-audio-dark-dual-wide-display-2560-x-1080-dark.jpg"}
                            title={'Enhance Your Music Experiance'}
                            pushLinkShop={'/buy'}
                            pushLinkCategory={'/pushlink'}
                            day={'23'}
                            hour={'05'}
                            minute={'59'}
                            second={'35'}
                            texthours={"Hours"}
                            textdays={"Days"}
                            textminutes={"Min"}
                            textsec={"Sec"}

                        />


                    </Grid>

                    <Grid container spacing={4} xs={12} sx={{mt:'5%'}}>

                        <Grid item xs={12} >

                            <Title title={"Featured"} />

                        </Grid>


                    </Grid>

                    <Grid container xs={12}>

                        <AdDescriptionImage

                            imageL={{

                                url:'https://www.xgn.nl/images/articles/2020/202007/_970x545_crop_center-center_82_line/3136374/ps5_black.f1593781621.jpg',
                                title:'PlayStation 5',
                                description:'game for play station 5',
                                pushLink:'/fck'

                            }}


                            imageRT={{

                                url:'https://media.istockphoto.com/id/1259149757/vector/realistic-vector-black-laptop-computer-mockup-template-with-blank-screen-on-dark-black.jpg?s=612x612&w=0&k=20&c=ZVaFVWkpcpuQ5O0AyQMYxLvT-WYM6lou42BiHNV7Rt4=',
                                title:'Laptop',
                                description:'laptop for design shop',
                                pushLink:'/laptop'

                            }}



                            imageRL={{

                                url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzV1M0veKJliZd79O7qh6EkMbYOG7bM0ElLA&usqp=CAU',
                                title:'Hamburger',
                                description:'Hamburger for launch',
                                pushLink:'/hamburger'

                            }}



                            imageRR={{

                                url:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgVFRIYGBgYGRgaEhgYGBgYGhoYGhocGhkYGhwcIS4lHB4rIx0cJjgmKy8xNTU1HCQ7QDszPy40NTEBDAwMDw8PGBERGDEdGB00MTE0NjQ/Pz8/MTQ0NDQ0NjE0MT8xMTExQDQ0PzQ0Pz80NDQ0Nj8/PzQ2NDQ0MTQxP//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADQQAAEDAgQEBQIFBQEBAAAAAAEAAhEhMQMSQVEEImFxMoGRofAFsRPB0eHxBhRCUmKSI//EABkBAQEAAwEAAAAAAAAAAAAAAAABAgQFA//EAB4RAQEAAgEFAQAAAAAAAAAAAAABAhEDEiExQYEE/9oADAMBAAIRAxEAPwD8cTQmEAAmAgBUAgQCYCYCYCBQnCcKoQTCcKoThBMJwnCcIJhOE4RCAhEJwiEChEKoRCCYRCuEQgkLqwsX8JmI0tJdiMa0HlLQ1+V9esBp6FsbxiMMxMGJidJAkid4Ip1WZb8+aygGYeYRBkkBvUxVo3Mub28108dwn4YY0gB+UjEAJJD8xMGRDXAFoLWzBEEzmAMDFdDWHKGtdJljZDqySSOwj/luyfHNObM57HvdzYmXNILuY5iWhsmf8SQIKDjrbSv8/b0Q/YDuJkT0V5Saj51VPbQE6oIbgEvDW8xPhyzWkwJrPRZkwqcO14uOul9L9twoKCSJVBCpraIJhIhaEKSEGZCRCshIhBBCRCohIhBJSVFSgaYQEwgYCYCAFQCAATAQAqAQIBVCAE4QEIhOE4QKEQqhEIFCpjC4gC5IA7mgVuYRcfY9dE2AwQB7A6G2yD6zjfpvC8PhwzPivhwxHnM/DLhlysGQNY0VfPM4gsrC8DGYDRoFZygAWv60C9/gGsxOH/8Ao7FcWOLcNgcPw2MF4bqScpP5rzf7VoJ5YEkQb0uPceqLbb2eTnYQAWR1E+ZImpW3CHCzOaW+MBrXPMhlZc6AJJMQO5lc2IyDli0g9a3UwiOlnBhzZa8TWhoYGWp2HMT2aVljcOWmIuAQZkGmnRXw+K9ubI/LLSHVjM03aYuNY6TcBUMLO6GExEt5YcRQ0bJrUkDN5oOn6U3Cy4pxWZ3MDDw7M7mS9z2tc5zhZoaJMgacwMScTlAyHDDHsDhYAg/iF+Uh9QBmdUGTSkSS+GxcJj3zh5x4WAwJYLl2zzlbYkCX9CF9P4hucvxsMPbBzNa3LBGUNyhpaBAaABUAOsZQY8E5mHiMxHtLyHMfAc0S7M1+UzMyM1KX8lz4paJhsCAKuzEmKkmBJJk2pK6OG4p7aZ3NBLHPyHKZYTBFRBEmDouBwBsAAKIKDoEb38lLnzomRKWSnf1UVm5SQtC1SVUJjVWSAhpWxw2xIQYlqkhUBF/2SIQSQpIVkJEIMyFJC0IUEIJKSZQgAmEgqCBhUAgKggAFQQEBAQnCYTCBKoQAnCAhEJwnCDUkFgrzAkRA8JAitzUGmnmow8MuMDrqBapkmi3wWy/wggTmgEgN1Na60JOy63sFJc0OIo0TyhoADZMmaERO2sgFe5/SzBke17m0zOAkEkAChImBc12XLxvFYTXl13VBhpAmaeKtoW39O4bG5zDHuDHgA2FocQKuIrANLCmnBx3MQ8UBEODQWkEOsTbQEd0HncTi8ziKaOE3iYJWWFjFsxqMroiokGLRoFeIJrFbb1PdYhu9ERZLaUi/edAdPQarfC4pzHh5Ls452uytc4vFWE57tzXvTQobwzMrjnJLWg5QBc7uJjKKWkmtAOZS/DMF1OWASKggQBB2FL7hBJ5hLWgAfp1qq4bicjTBnOQ2IJpHikdSKD9EmOe12ZjfBlJhuZrQD4nB0iCaEGknrCh+O4nMXFxzF1SYkmcwIIIM1pGiiuRw70vPum3smk1BTDXTzTe3UWKbcMkE6ASexp87rN7tEEToLJFU1MVVRnZNryEFqSAhMBIBXCCCEiFZUlBBUlaFQUEFJUVKACsKQqCCgqCQVBABMICYQMJhATCACoBATCAWzsEAnnED/IBxBMSIkAxNJWIVtm4mRWRp16IOvDawPkAkCQGTBJywCT3qQPaVk57Q0ANrcujzudunRW4tzzJArlMSbSKU3H6QsJNJJMWqivo/p2EQ6W4pw3tw3HENQ4zyxFLkltLZSVw43EPAIlpyudAblaJtJkVpNPh0a7Ec2WNPNEkUmmwpE1r+y4+I4HFDeYgTBIpNO36rG5Yz29Jw8lm5jbAxzQA8ljpc7k5i4BsQXWEOmKOmiw4hga8tnNbMWnW7gKeXQhYtEAtpWJoJpsdLpOZCu2PTZ5dQYACHAmQC2HQBW5AFe1O2ixe0wNgTAprqqcxzbjY73iLd5RmF5AI1+/5oxIcU5rXNpD5GJPiiQ4ehbM+q5nGi24sDNRzaAeG0xWuqwpFunp9kEICZ3VPwy24gyRBuCKGRoqh5jp5rOFrgkA1E0dANpIgTXSSe4HVQRogkiEphNwQgmFUJAJoE0KihoQUElSVZUlBJUFWVJQQVKoqUAFYUhUEFBUFIVBAwqCQVBAwmEgqCBhAQEwgYXocJgOcC2IJY5zOYAGHNc4msUaHGv+o1hcAW/DvcMwa2SWn/ABkgCHFzdWkZbjSUG2IxrgDMhobJOVriSIo2SSBEeU0mFywu1+KwNbPOcpoJY1rpME05yBGwoAuV7sxJ36AewoPJFr6v6M44uExrfFRld5hvtC+g+vfS2kQ3w4Zfla1pzOazM01A5nOexx7Hsvkv6a4gtzAGrXte3v8AGhe19Z+t4bnS0kElzg1zszWl/M/I1oqCSTzTeIWrJJnZp3cs7yfn4st6kln2PkuM4cYb4gVI1BMGse8eS5nia/K/IXRx2K/EOYNoKSGBg+whcL3EyfK9VsTw42eple+2zcSGkUrlzGawKQPXvU6SgYYJEggGtB9gb6X6qeGdDXOyg3a2SPE4Xg3gT2JadpJtuDS4nrOqrzIFoILhQts1wJNrkyG72msJtY7EJawEgczGGpq4NIb1mKCT6Sq/CaSInNWWnSm8DY6fvk8gkiSSJgn2Ha/qg2dlwnNf+GS0OcWMeYJyuoXiBQGkQJhw0MYYlLkknxF0TmNZvX91LzdxqTcwDW8lYlxKqOgMygSL2NbbjossZ0mil7y65Jig7bK2b+Xz5qgyCULVraqHitECYJTDVMQtZ2QIJFXEX85p/KmEEFSVoQoKCCpKopFBBUqipQMBWAoCsKigEwEgUwUFAKgEgUwUFAJpApygFamUSgta4TgGu5iDSKgAghwNJkn2qZuJ55Vh5gjQkE9xMfc+qBvfJJ3M0tXZEqJRKDp4d8ZhSrSBM06911H6hiNaWMe1jC0E5GMaSer8ucmRvFF5oct3ERAoBUExUEW6KG3PiNMSSdjJkyjLB/MVVudMkCASYAmnSqTMLUkASJqJrJkNmtj7boDCAkn0+aLd7BUiQ0k5Qaui+gjba/pGIWkwyepdALjNDlEht7Se5VBrhpM1Otq1+/mooebnxTFYiI6aLB4AJ9vOq3e8wQDykgxJiYP6mp3KyLfmvqgl4EGXC4AF95PYQP8A0LrJw6rX8NpcRmoJqOa21lL4jlkiaE0ptH5/ZVGd0BDgkCg1ExRDQRXZIPIp8qpzESgePedwCFkCqDZQ1qC2s38lRCJQXKhEKCFZ3UEoJIUkKiVBKBEKIVkqJQSFQUhUEFhMKQqCCgmFIVBBSalUgaEk0DQhCCntiL2EyIqhgB3nalq672WmM/PBoCAAdBDWtAMk3MEnr3oYb8gkeKT6RobzdBpgcOCaybZYtW4cRqNu+y6cgc0eEULQ0ULcsEOdSoPcm52njZxTxMPIkAGNgIA7RTsurhMd7y6XGoaLnaBr0UGmHxMVaQBILWtNW5Yyw6KTSSKmDuuPiMUOvFh69T16LuxBLdJoXOisHc62PouXisJrSRNTaK7/ACFF2z/Da0tl2xOXKaHaDBMR69FT8TM8lrS1pmAKw3bSYG96rCZiRex7UVZq3iRWNosgeeJgWm+ot5mFDnCpr039E8R2g0+VVNYSJmYv02760/dBgxwBtIrTRLEMkkACdBYLR+EYzActa9jHr+oWRAiiqJlaDlrYzTvuD0UBt6KYQMFCA2k+XVU0xPaPVBTTHVNgAqfMQob/AAqcZCAJ2UlU1tJSJQSUnDqiFJVCKkplN7CL7A9pEiepFUGZUplSgQVBQFQQaBUFAVBBQTCkJhBYTUhNBSalNA01KaCmBMulGC8A1mOn3XU3BBJDQTyiZgk8oc4iNLkH/UEmkqDHAwc4eZgtbmA/2MgR6EnyXZhcM5gLwOQkAEwDOUPFDUcrmmYghwqlg45w4yDKY5iC4S6SWuqaUgRblm6H8U1/izk+J2XK0G2kQO8fqmxlnJrQCxH2i6ze5sy6RQQ0RWamSbCJ3XS8MDZa/mM0FJEiDvNwRAsDJmnOzCbIBBO9vMASEGIEzH8zFOghasltdf8AG3mt8TDhoLi4NkSB4Zgx1JHMsnYrMuVrfMx/tM2vp2UVGG8s5gNaSJte9tK3XRjPYWywFjyeZoOZhBFwdIEzNZPeOV1KRf2WR0EoNjiAMLYAl2Yms2hrRsOZ3fN0C5y0+S34PiPw3AkBwGblc1rwZBHhdQ+dOhsc3vzScoEkmGiAJMwALDYKoiYCbsNzfE0ibSOgP2LT5hVgYP4jmtF3EAedB7wocIpJgTANC2SbiwNJMTdBEpqXCqbR7ICYV4bjclS31VtPK6nsO507WQSHSqBGoPSvros2DVUSNv3QNrwP8Qb3nUQLEWuOt5ClClt7TFx0VElDjNaA/ck6ACB7CiHnam2qbG5iGwZNBlBJJiGgAVJLoHnZBiVKvEbBiZ9fzWaBBUFITCCwqCgFUCgsFMFSCmCgoK1mCnKC01EpygpbYGCHzOIxgEVeXazZrGucbaCkjdYShB63BfRnYmG/GOfIxzWnJhve55cHOOQWhoaC5zi2MwuaHDGaWvh4fAIaC+jxyiGETAIBFO3VcuPjOxIznPlaGtLqkNHhGa8CAACYAoKLpwvquK1rmNeILCxxyMLiwjKW5i0uAilCpQ8U5gAIBAAMuAaKitSZqTIEb2BXZhfTmYeKf7jPiYLTGI/hn4buYgEBr+ZhqbGDFaWXkvfndJJO/wA176qnOOrdBFIkb/uorp4gDOS0ZGkksbM5Wkkhs3IA1MEqBiQCdZOuoiPnRYvNRPqrYxxBcG0EguikRWPW9wgjFkwR/CtuHNzELFprSEy0zftrKDZ7qme2/uFyudVaurc0/P1Sdhkm17H7wgh76pZk8W9gOgWSqLD4BEAzFTM0n7z7KCiEigopteNRI7x5qZp1+fPJDGzNqdRvFN0AjOQImhuqsPspDUFk7qSUF3VIqi3EQN67Vrrtr7dznKCUiUARSfIzEz0EzERXeUsN+UzWlRBiot5TFqpsxMpmAeht8F1DiPnzuoFiOkk0qSYFq1UIKSoQTCeCwOcASRJAECakwNQthw0xldIzZZdDZdSgqd1BiCqBVnh3UMUMZZIsQXAnagNf+StmcHUBzh4oIF4ABcR1giiowBTBTbh82VxAtJkEVE3mPdanANYmgnmEGgkwBM3Feo3CDMFOVqeFIDpIlpAdWgvf0Ed0hwzuliTWwBAM+o99aIM5TlJEoKlOVEpygtRmTlKKyoNWAqmHSdb1/T8lnO1Ngdu6kO7IO5pcySMpoQYLXUdIkA1sYndUXuxBEtaxjfCXQXGaACZcZJNKDoIXG18X89fndaPxjMihIgQAOURFuw60UVGGa6ROtgOqoEmel9tBceQ81OI8urG5MUHpYdgFTs0Amgc05dRlzOaTenMH+ddVUBb67LF0rTPBB6V+eit2A8s/EyksLizN/wBgBxHo4Hr5FBg1xIvZSUAioQTCA33+SkiUiVANfE0BkRXSoMjY0jsSkCkSpKovOVZf00WMq21QBPREJBMlAEpEpEpEqgJUkoJSJQIpIKSgTXQQRcVHcK24hEQbHMOhMSfYeiEILbxDwZDjoPICB7Kv7l3+x171EGvZCEEh5obxQSAabQaLT+4fUZjW/pH2A9EIVDGO6vNcku6k3ne6bsdzruJm/qD9wEIQRKcoQgcpyhCAlEoQgJTQhAZullTH9uk9aJoUDa9tfZJ7oJHebHohCDOVq6A0Q6ZAmNCdD1CEIOeUZkIQBKJQhBJKSEIESgOhCEDaVRKEKiSVJKEIAlSUIUCSQhB//9k=',
                                title:'Coca Cola',
                                description:'Coca Cola for dinner and launch',
                                pushLink:'/coca-cola'

                            }}



                        />

                    </Grid>

                    <Grid item xs={12}>

                        <FeaturesIcons />

                    </Grid>


                </Grid>

                <Grid item xs={12}>

                    <Footer />

                </Grid>

            </Grid> */}

           
            
            <Grid sx={{mb:"3%"}} container>

                <Box sx={{position:'relative'}}>
{showlist ?     <Grid md={6} sm={6}  item   sx={{height:"350px",width:{sm:"50%",xs:"50%"},mt:"4%",ml:'3%',zIndex:"1000"}}>

<CategoryList data={Cdate}/>
</Grid>  :<Grid sx={{display:{sm:"none",md:"flex",xs:"none"}}}><CategoryList data={Cdate}/> </Grid>}
{showlist?  <ArrowCircleLeftIcon onClick={()=>setShowlist(false)} sx={{display:{md:"none"},color:"purple", position:"absolute",top:"20px",fontSize:"40px",cursor:"pointer"}}/> :<ArrowCircleRightIcon onClick={()=>setShowlist(true)} sx={{display:{sm:"flex" , md:"none"},position:"absolute",top:"20px",fontSize:"40px",cursor:"pointer",color:"purple"}}/>}

</Box>  


{showlist ? <Grid   sm={6} md={6}  item sx={{width:{sm:"50%",xs:"50%"}, display:"flex",justifyContent:"center",alignItems:"center",margin:"auto",mt:"10%",zIndex:"0","@media(max-width:400px)":{marginLeft:'50px'}}}>
                <ImageViewer images={[

'https://www.cherrymx.de/_Resources/Persistent/7/8/5/6/78561b27f90f9cb5a002e2cee0e72ad6fd6943d6/Aufmacher.png',
'https://cdn.wccftech.com/wp-content/uploads/2021/06/Tailored-Power-States-Balanced-1030x579.png',
'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
'https://www.club386.com/wp-content/uploads/2022/04/Alienware-m17-R5.jpg',
'https://i.pcmag.com/imagery/reviews/002Sl2sNGGaoGXVj4c8Iu6g-1.jpg',



]} />

                </Grid> :<Grid   sm={6} md={6}  item sx={{width:{sm:"50%",xs:"100%"}, display:"flex",justifyContent:"center",alignItems:"center",margin:"auto",mt:"10%",zIndex:"1","@media(max-width:400px)":{marginLeft:'50px'}}}>
                <ImageViewer images={[

'https://www.cherrymx.de/_Resources/Persistent/7/8/5/6/78561b27f90f9cb5a002e2cee0e72ad6fd6943d6/Aufmacher.png',
'https://cdn.wccftech.com/wp-content/uploads/2021/06/Tailored-Power-States-Balanced-1030x579.png',
'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
'https://www.club386.com/wp-content/uploads/2022/04/Alienware-m17-R5.jpg',
'https://i.pcmag.com/imagery/reviews/002Sl2sNGGaoGXVj4c8Iu6g-1.jpg',



]} />

                </Grid>}
                

            </Grid>


            <Grid container>
                <Grid item xs={12} sx={{mb:"2%"}}>
            <Title title={"Categories"} />
            </Grid>

                <Box sx={{display:"flex",justifyContent:"space-between",width:"100%"}}>
            <Grid item>
            <DescriptionTitle title={'Brows By Category'} />
            </Grid>

                <Grid item>
            <PageInatationButton

data={ [
    { id: 1, icon: <ArrowBackOutlinedIcon />, onClick:()=>{
            console.log('left button click')} },
    { id: 2, icon: <ArrowForwardOutlinedIcon /> , onClick:()=>{
            console.log('right button click')}},

]}

/>
</Grid>
</Box>

<Grid item>
<CategorySignButton

data={
    [
        { id: 0, icon: <PhoneAndroidOutlinedIcon />, text: "Phones", colors: "white",},
        { id: 1, icon: <ComputerOutlinedIcon />, text: "Computer", colors: "white" },
        { id: 2, icon: <WatchOutlinedIcon />, text: "SmartWatch", colors: "white" },
        { id: 3, icon: <CameraAltOutlinedIcon />, text: "Camera", colors: "white" },
        { id: 4, icon: <HeadsetOutlinedIcon />, text: "HeadPhones", colors: "white" },
        { id: 5, icon: <SportsEsportsOutlinedIcon />, text: "Gaming", colors: "white",},

    ]
}

/>
</Grid>
            </Grid>
           
            

          

        </>



    )




}

export default Home;


