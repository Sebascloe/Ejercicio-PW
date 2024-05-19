import { MenuItem, Toolbar, Typography, AppBar, Container, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';


function Barrita(){
    return(
        <>
            <AppBar position="fixed" style={
                {backgroundColor: "rgba(74, 144, 226, 1)"}
            }> 
                <Container maxwidth="lg">
                    <Toolbar>
                        <MenuItem>
                            <Typography variant='h6'>
                                TIENDA
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography variant='h6'>
                                Mas vendidos
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography variant='h6'>
                                Nuevos
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography variant='h6'>
                                Ofertas
                            </Typography>
                        </MenuItem>
                        <IconButton>
                            <ShoppingCartIcon/>
                        </IconButton>
                        <MenuItem>
                            <Typography variant='h6'>
                                Ayuda
                            </Typography>
                        </MenuItem>
                        <button>
                            Mi cuenta
                        </button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

function Barrita2(){
    return(
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant='h6'>
                        Registrate
                    </Typography>
                    <IconButton>
                        <ShoppingCartIcon/>
                    </IconButton>
                    <Typography variant='h6'>
                        waza
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Barrita;
