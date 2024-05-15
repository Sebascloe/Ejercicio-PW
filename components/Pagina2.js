import { AppBar, Container, MenuItem, Toolbar, Typography, Grid, Box, IconButton, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
//import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate } from 'react-router-dom';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import React, { useState } from 'react';

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


function BotonPagoQ() {
    const [valor, setValor] = React.useState("female");
    const handleChange = (e) => {
        setValor((e.target.value));
    };
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={valor}
                onChange={handleChange}
            >
                <FormControlLabel value="female" control={<Radio />} label="Pago con codigo QR" />
                <FormControlLabel value="male" control={<Radio />} label="Pago con tarjeta de credito" />
            </RadioGroup>
        </FormControl>
    );
}

function BotonPago({ handlePaymentMethodChange }) {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                onChange={(e) => handlePaymentMethodChange(e.target.value)}
            >
                <FormControlLabel value="QR" control={<Radio />} label="Pago con codigo QR" />
                <FormControlLabel value="Tarjeta" control={<Radio />} label="Pago con tarjeta de credito" />
            </RadioGroup>
        </FormControl>
    );
}


function BotonEnvioQ() {
    const [valor, setValor] = React.useState("female");
    const handleChange = (e) => {
        console.log(e.target.value)
        setValor((e.target.value));
    };
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={valor}
                onChange={handleChange}
                row
            >
                <FormControlLabel value={"female"} checked={valor == 'female'} control={<Radio />} label="Economico Aereo - S/10.00" sx={{ m: 2 }} />
                <FormControlLabel value={"male"} checked={valor == 'male'} control={<Radio />} label="Envio prioritario (5 a 10 dias) - -S/17.00" sx={{ m: 2 }} />
            </RadioGroup>
        </FormControl>
    );
}

function BotonEnvio() {
    const [valor, setValor] = React.useState("female");
    const handleChange = (e) => {
        console.log(e.target.value)
        setValor((e.target.value));
    };
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={valor}
                onChange={handleChange}
                row
            >
                <FormControlLabel value={"female"} checked={valor == 'female'} control={<Radio />} label="Economico Aereo - S/10.00" sx={{ m: 2 }} />
                <FormControlLabel value={"male"} checked={valor == 'male'} control={<Radio />} label="Envio prioritario (5 a 10 dias) - -S/17.00" sx={{ m: 2 }} />
            </RadioGroup>
        </FormControl>
    );
}


function Cuerpo() {

    const navigate = useNavigate();

    const handleCheckOut = () => {
        navigate('/pagina3');
    }

    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    return (
        <>
            <Container sx={{ backgroundColor: "rgba(246,246,246,255)" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box sx={{ marginTop: 8, paddingLeft: 2, paddingTop: 2 }}>
                            <Typography sx={{ fontSize: "25px" }}>
                                ¡Casi Listo! Tu orden no estará completa hasta que revises y presiones el botón "completar orden" al final de la página
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ paddingLeft: 2, backgroundColor: "rgba(217,217,217,255)", border: "2px solid black" }}>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Datos de Compra
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", paddingTop: "20px" }}>
                            <Box sx={{ padding: "5px", backgroundColor: "#FFFFFF", flexGrow: 1 }}>
                                <Box sx={{ paddingBottom: "10px", paddingTop: "10px" }}> <Typography sx={{ fontWeight: "bold" }}> Direccion de envio </Typography></Box>
                                <Box sx={{ paddingBottom: "10px", paddingTop: "10px", width: "100%" }}> <TextField variant="outlined" label="Linea 1" fullWidth /></Box>
                                <Box sx={{ paddingBottom: "10px", paddingTop: "10px", width: "100%" }}> <TextField variant="outlined" label="Linea 2" fullWidth /></Box>
                                <Box sx={{ paddingBottom: "10px", paddingTop: "10px" }}> <TextField variant="outlined" label="Distrito" fullWidth /></Box>
                                <Box sx={{ paddingBottom: "10px", paddingTop: "10px" }}> <TextField variant="outlined" label="Ciudad" fullWidth /></Box>
                                <Box sx={{ paddingBottom: "10px", paddingTop: "10px" }}> <TextField variant="outlined" label="Pais" fullWidth /></Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", paddingTop: "20px" }}>
                            <Box sx={{ backgroundColor: "#FFFFFF", padding: "5px", flexGrow: 1 }}>
                                <Box> <Typography sx={{ fontWeight: "bold" }}> Pago </Typography></Box>
                                <Box> <BotonPago handlePaymentMethodChange={handlePaymentMethodChange} /> </Box>
                                {paymentMethod === 'QR' && (
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:"50px" }}>
                                    <QrCode2Icon sx={{ fontSize: 200 }} />
                                </Box>
                                
                                )}
                                {paymentMethod === 'Tarjeta' && (
                                    <>
                                        <Box sx={{ paddingBottom: "10px", paddingTop: "10px" }}> <TextField variant="outlined" label="Numero de Tarjeta" fullWidth /></Box>
                                        <Box sx={{ paddingBottom: "10px", paddingTop: "10px" }}> <TextField variant="outlined" label="Nombre en Tarjeta" fullWidth /></Box>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Box sx={{ paddingBottom: "10px", paddingTop: "10px", flexGrow: 1 }}> <TextField variant="outlined" label="Vencimiento" fullWidth /></Box>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Box sx={{ paddingBottom: "10px", paddingTop: "10px", flexGrow: 1 }}> <TextField variant="outlined" label="CVV" fullWidth /></Box>
                                            </Grid>
                                        </Grid>
                                    </>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ paddingTop: "40px" }}>
                        <Box sx={{ paddingLeft: 2, backgroundColor: "rgba(217,217,217,255)", border: "2px solid black" }}>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Método de Envío
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid>
                    <Box sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
                        <Box sx={{ backgroundColor: "#FFFFFF" }}> <BotonEnvio /> </Box>
                    </Box>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{ padding: "15px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                            <Box sx={{ padding: "5px", backgroundColor: "#FFFFFF", flexGrow: 1 }}>
                                <Box> <Typography sx={{ fontWeight: "bold" }}> Items en Pedido </Typography></Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Box sx={{ paddingLeft: "30px" }}> <Typography> 1 x Juego de Cartas Pokemon Masters League </Typography></Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ paddingLeft: "80px" }}> <Typography> S/ 50.00 </Typography></Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Box sx={{ paddingLeft: "30px" }}> <Typography> 2 x Juego de Cartas Magic The Gathering </Typography></Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ paddingLeft: "80px" }}> <Typography> S/ 50.00 </Typography></Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ padding: "15px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                            <Box sx={{ padding: "5px", backgroundColor: "#FFFFFF", flexGrow: 1 }}>
                                <Box> <Typography sx={{ fontWeight: "bold" }}> Resumen de orden </Typography></Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Box sx={{ paddingLeft: "30px" }}> <Typography> SubTotal: </Typography></Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ paddingLeft: "80px" }}> <Typography> S/ 100.00 </Typography></Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Box sx={{ paddingLeft: "30px" }}> <Typography> Envio: </Typography></Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ paddingLeft: "80px" }}> <Typography> S/ 17.00 </Typography></Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Box sx={{ paddingLeft: "30px" }}> <Typography> Impuestos: </Typography></Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ paddingLeft: "80px" }}> <Typography> S/ 18.00 </Typography></Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Box sx={{ paddingLeft: "30px" }}> <Typography> Total: </Typography></Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ paddingLeft: "80px" }}> <Typography> S/ 135.00 </Typography></Box>
                                    </Grid>
                                </Grid>
                                <Box sx={{ textAlign: 'center' }}> <Button onClick={handleCheckOut} sx={{ backgroundColor: "#000000", borderColor: "#000000", color: "#FFFFFF" }}>Completar orden</Button> </Box>
                            </Box>
                        </Box>
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




function Pagina2() {
    return (
        <>
            <Barrita />
            <Cuerpo />
            <Baja />
        </>
    )
}


export default Pagina2