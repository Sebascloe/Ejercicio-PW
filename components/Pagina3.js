import * as React from 'react';
import { Container, MenuItem, Toolbar, Typography, AppBar, Grid, Box, IconButton, Link, Paper } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Barrita() {
    return (
        <>
            <AppBar position='fixed' sx={{ backgroundColor: "#FFFFFF" }}>
                <Container>
                    <Toolbar>
                        <MenuItem>
                            <Typography variant='h6' sx={{ color: "black", fontWeight: "bold" }}>
                                TIENDA
                            </Typography>
                        </MenuItem>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

function Cuerpo() {
    return (
        <>
            <Container sx={{ backgroundColor: "rgba(246,246,246,255)" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box sx={{ marginTop: 8, paddingLeft: 2, paddingTop: 2 }}>
                            <Typography sx={{ fontSize: "25px", textAlign: "center" }}>
                                ¡Muchas gracias por su pedido!
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ paddingLeft: 2, paddingTop: 2 }}>
                            <Typography sx={{ fontSize: "25px", textAlign: "center" }}>
                                Puedes ver el detalle y estado de tu pedido ingresando a <Link component="button" sx={{ color: "inherit" }}> tu cuenta </Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ paddingLeft: 2, paddingTop: 2 }}>
                            <Typography sx={{ fontSize: "25px" }}>
                                Tambien te podria interesar...
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={2}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '& > :not(style)': {
                                    m: 1,
                                    width: 128,
                                    height: 160,
                                }
                            }}>
                                <Paper elevation={3} sx={{ width: 120, height: 120, marginRight: 2 }} />
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography> Item 1 </Typography>
                                    <Link component="button" sx={{ color: "inherit", paddingBottom: 1 }}> Learn More </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '& > :not(style)': {
                                    m: 1,
                                    width: 128,
                                    height: 160,
                                }
                            }}>
                                <Paper elevation={3} sx={{ width: 120, height: 120, marginRight: 2 }} />
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography> Item 2 </Typography>
                                    <Link component="button" sx={{ color: "inherit", paddingBottom: 1 }}> Learn More </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '& > :not(style)': {
                                    m: 1,
                                    width: 128,
                                    height: 160,
                                }
                            }}>
                                <Paper elevation={3} sx={{ width: 120, height: 120, marginRight: 2 }} />
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography> Item 3 </Typography>
                                    <Link component="button" sx={{ color: "inherit", paddingBottom: 1 }}> Learn More </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '& > :not(style)': {
                                    m: 1,
                                    width: 128,
                                    height: 160,
                                }
                            }}>
                                <Paper elevation={3} sx={{ width: 120, height: 120, marginRight: 2 }} />
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography> Item 4 </Typography>
                                    <Link component="button" sx={{ color: "inherit", paddingBottom: 1 }}> Learn More </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '& > :not(style)': {
                                    m: 1,
                                    width: 128,
                                    height: 160,
                                }
                            }}>
                                <Paper elevation={3} sx={{ width: 120, height: 120 }} />
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography> Item 5 </Typography>
                                    <Link component="button" sx={{ color: "inherit", paddingBottom: 1 }}> Learn More </Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>



                </Grid>

            </Container>


        </>

    )

}

function Baja() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "rgba(225,225,225,255)", paddingTop: "80px", paddingBottom: "80px" }}>
                        <Box sx={{ paddingLeft: "360px" }}>
                            <Typography sx={{ fontWeight: "bold" }}> LA TIENDITA DEL ABUELO</Typography>
                            <Typography> 2010-2020</Typography>
                            <Typography> privacy-Terms</Typography>
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: "bold" }}> Cuenta </Typography>
                            <Typography> Login </Typography>
                            <Typography> Registro </Typography>
                            <Typography> Carrito </Typography>
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: "bold" }}> Productos </Typography>
                            <Typography> Mas vendidos </Typography>
                            <Typography> Nuevos </Typography>
                            <Typography> Ofertas </Typography>
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: "bold" }}> Ayuda </Typography>
                            <Typography> Acerca de Nosotros</Typography>
                            <Typography> Politica de Envio </Typography>
                            <Typography> FAQ </Typography>
                        </Box>

                        <Box sx={{ paddingRight: "350px" }}>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton>
                                <YouTubeIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );

}

function Pagina3() {
    return (
        <>
            <Barrita />
            <Cuerpo />
            <Baja />
        </>
    )
}

export default Pagina3