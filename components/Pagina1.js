import { Container, MenuItem, Toolbar, Typography, AppBar, Grid, Box, IconButton, Button, Link } from '@mui/material';
import Paper from '@mui/material/Paper';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
//import * as React from 'react';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';


function Barra() {
    return (
        <>
            <AppBar position='fixed' sx={{ backgroundColor: "#FFFFFF" }}>
                <Container>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <MenuItem>
                                <Typography variant='h6' sx={{ color: "black", fontWeight: "bold" }}>
                                    TIENDA
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography variant='h6' sx={{ color: "black" }}>
                                    Mas vendidos
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography variant='h6' sx={{ color: "black" }}>
                                    Nuevos
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography variant='h6' sx={{ color: "black" }}>
                                    Ofertas
                                </Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <MenuItem>
                                <IconButton>
                                    <ShoppingCartIcon />
                                </IconButton>
                            </MenuItem>
                            <MenuItem>
                                <Typography variant='h6' sx={{ color: "black" }}>
                                    Ayuda
                                </Typography>
                            </MenuItem>
                            <Button sx={{ backgroundColor: "#000000", borderColor: "#000000", color: "#FFFFFF" }}>
                                Mi cuenta
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

const peliculas = [
    { id: 1, titulo: 'Voltron Mini Action Voltron Vehicle Force Figure (Standard)', precio: 65.99, cantidad: 1, subtotal: 65.99 },
    { id: 2, titulo: 'Star Wars Collection: Darth Vader White (Special Christmas 2024 Disney Edition)', precio: 65.99, cantidad: 2, subtotal: 130.99 },
    { id: 3, titulo: 'Star Wars Collection: Darth Vader White (Special Christmas 2024 Disney Edition)', precio: 65.99, cantidad: 2, subtotal: 130.99 },
];

/*
const guardados = [
    { id: 1, titulo: 'Voltron Mini Action Voltron Vehicle Force Figure (Standard)', precio: 65.99, cantidad: 1, subtotal: 65.99 },
    //{ id: 2, titulo: 'Star Wars Collection: Darth Vader White (Special Christmas 2024 Disney Edition)', precio: 65.99, cantidad: 2, subtotal: 130.99 },
    //{ id: 3, titulo: 'Star Wars Collection: Darth Vader White (Special Christmas 2024 Disney Edition)', precio: 65.99, cantidad: 2, subtotal: 130.99 },
];*/

function SelectorCantidad({ precio, onCantidadChange }) {
    const [cantidad, setCantidad] = useState(1);

    const handleChangeSelector = (e) => {
        const newCantidad = parseInt(e.target.value);
        setCantidad(newCantidad);
        onCantidadChange(newCantidad);
    };

    return (
        <div className="quantity-selector">
            <input type="number" value={cantidad} onChange={handleChangeSelector} />
        </div>
    );
}

/*<a href="#" sx={{ borderBottom: '1px solid #000', marginRight: 1, textDecoration: 'none', color: 'inherit' }}>Eliminar </a>

<a href="#" sx={{ borderBottom: '1px solid #000', marginLeft: 1, textDecoration: 'none', color: 'inherit' }}> Guardar para después</a>
*/

function Cuerpo() {

    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/pagina2');
    };

    const [productos, setProductos] = useState(peliculas);
    const [guardados, setGuardados] = useState([]);

    const handleCantidadChange = (id, newCantidad) => {
        const updatedProductos = productos.map((producto) =>
            producto.id === id
                ? {
                    ...producto,
                    cantidad: newCantidad,
                    subtotal: newCantidad * producto.precio,
                }
                : producto
        );
        setProductos(updatedProductos);
    };

    const total = productos.reduce((acc, producto) => acc + producto.subtotal, 0);

    const handleEliminar = (id) => {
        setProductos(productos.filter((producto) => producto.id !== id));
    };

    const handleGuardarParaDespues = (id) => {
        const productoGuardado = productos.find((producto) => producto.id === id);
        setGuardados([...guardados, { ...productoGuardado, id: uuid() }]);
        setProductos(productos.filter((producto) => producto.id !== id));
    };
    
    const handleEliminarGuardado = (id) => {
        setGuardados(guardados.filter((guardado) => guardado.id !== id));
    };



    return (
        <>
            <Container sx={{ backgroundColor: "rgba(246,246,246,255)" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box sx={{ marginTop: 8, paddingLeft: 2, paddingTop: 2 }}>
                            <Typography sx={{ fontSize: "25px" }}>
                                2 Items en tu Carrito de Compras
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ paddingLeft: 2, backgroundColor: "rgba(217,217,217,255)", border: "2px solid black" }}>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Items Disponibles para Envio
                            </Typography>
                        </Box>
                    </Grid>

                    {productos.map((producto) => (
                        <Grid item xs={12} key={producto.id}>
                            <Box sx={{ display: 'flex', alignItems: 'center', padding: 0.5, border: "1px solid #ccc", marginBottom: 2 }}>
                                {/* Columna 1: Imagen de la película */}
                                <Box sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 128,
                                        height: 128,
                                    },
                                }}>
                                    <Paper elevation={3} sx={{ width: 100, marginRight: 2 }} />
                                </Box>

                                {/* Columna 2: Título de la película */}
                                <Box sx={{ flexGrow: 1, display: 'grid', gridTemplateRows: '1fr auto' }}>
                                    <Typography variant="subtitle1">{producto.titulo}</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                                        <Link
                                            component="button"
                                            variant="body2"
                                            sx={{ color: "inherit" }}
                                            onClick={() => handleEliminar(producto.id)}
                                        >
                                            Eliminar
                                        </Link>
                                        <span> | </span>
                                        <Link
                                            component="button"
                                            variant="body2"
                                            sx={{ color: "inherit" }}
                                            onClick={() => handleGuardarParaDespues(producto.id)}
                                        >
                                            Guardar para después
                                        </Link>

                                    </Box>
                                </Box>


                                {/* Columna 4: Cantidad */}
                                <Box>
                                    <Typography>Cantidad:
                                        <SelectorCantidad
                                            precio={producto.precio}
                                            onCantidadChange={(newCantidad) => handleCantidadChange(producto.id, newCantidad)}
                                        />
                                    </Typography>
                                </Box>

                                {/* Columna 5: Precio y Subtotal */}
                                <Box>
                                    <Typography>Precio: S/{producto.precio}</Typography>
                                </Box>
                                <Box>
                                    <Typography>Subtotal: S/{producto.subtotal}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Box sx={{ paddingLeft: 2, display: 'flex', justifyContent: 'flex-end' }}>
                            <Typography>
                                Total: {total.toFixed(2)} dolar
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ paddingLeft: 2, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button onClick={handleCheckout} sx={{
                                backgroundColor: "#000000",
                                borderColor: "#000000",
                                color: "#FFFFFF"
                            }}>
                                Checkout
                            </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ paddingLeft: 2, backgroundColor: "rgba(217,217,217,255)", border: "2px solid black" }}>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Guardado para despues
                            </Typography>
                        </Box>
                    </Grid>

                    {guardados.map((guardado) => (
                        <Grid item xs={12} key={guardado.id} >
                            <Box sx={{ display: 'flex', alignItems: 'center', padding: 0.5, border: "1px solid #ccc", marginBottom: 2 }}>
                                {/* Columna 1: Imagen del producto */}
                                <Box sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 128,
                                        height: 128,
                                    },
                                }}>
                                    <Paper elevation={3} sx={{ width: 100, marginRight: 2 }} />
                                </Box>

                                {/* Columna 2: Título del producto */}
                                <Box sx={{ flexGrow: 1, display: 'grid', gridTemplateRows: '1fr auto' }}>
                                    <Typography variant="subtitle1">{guardado.titulo}</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Link
                                            component="button"
                                            variant='body2'
                                            sx={{ color: "inherit" }}
                                            onClick={() => handleEliminarGuardado(guardado.id)}
                                        >
                                            Eliminar
                                        </Link>
                                        <span> | </span>
                                        <Link
                                            component="button"
                                            variant='body2'
                                            sx={{ color: "inherit" }}
                                        >
                                            Guardar para después
                                        </Link>
                                    </Box>
                                </Box>

                                {/* Columna 4: Cantidad */}
                                <Box>
                                    <Typography>Cantidad: {guardado.cantidad}  </Typography>
                                </Box>

                                {/* Columna 5: Precio y Subtotal */}
                                <Box>
                                    <Typography>Precio: S/{guardado.precio}</Typography>
                                </Box>
                                <Box>
                                    <Typography>Subtotal: S/{guardado.subtotal}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </>
    );
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








function Pagina1() {
    return (
        <>
            <Barra />
            <Cuerpo />
            <Baja />
        </>

    );
}

export default Pagina1