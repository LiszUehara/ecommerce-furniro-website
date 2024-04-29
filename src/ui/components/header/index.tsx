import React, { useState, useEffect } from 'react';
import { Grid, Button, Stack, Typography } from '@mui/material';
import { PersonOutlineOutlined, SearchOutlined, FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [highlightedButton, setHighlightedButton] = useState<number>(0);

    // Array de objetos mapeando rotas aos índices dos botões
    const buttonsMap = [
        { route: '/', index: 0 },
        { route: '/shop', index: 1 },
        { route: '/about', index: 2 },
        { route: '/contact', index: 3 },
    ];

    useEffect(() => {
        // Verifica se a localização atual corresponde a alguma rota mapeada
        const matchedButton = buttonsMap.find(item => item.route === location.pathname);
        console.log(location.pathname)
        if (matchedButton) {
            setHighlightedButton(matchedButton.index);
        } else {
            if(location.pathname.includes('/shop')){
                setHighlightedButton(1)
            }else{
                setHighlightedButton(5);
            }


        }
    }, [location.pathname]);

    return (
        <Grid container spacing={3} alignItems="center" justifyContent="space-between" paddingY={3} paddingX={10}>
            <Grid item xs={1}>
                <Stack direction="row" alignItems={'center'}>
                    <img src={'/logo.png'} alt="logo" width={'50'}/>
                    <Typography variant={'h5'}>Furniro</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                <Button sx={{ color: 'black', textTransform: 'none', fontWeight: highlightedButton === 0 ? 'bold' : 'normal' }} href={'/'}>Home</Button>
                <Button sx={{ color: 'black', textTransform: 'none', fontWeight: highlightedButton === 1 ? 'bold' : 'normal' }} href={'/shop'}>Shop</Button>
                <Button sx={{ color: 'black', textTransform: 'none', fontWeight: highlightedButton === 2 ? 'bold' : 'normal' }}>About</Button>
                <Button sx={{ color: 'black', textTransform: 'none', fontWeight: highlightedButton === 3 ? 'bold' : 'normal' }}>Contact</Button>
            </Grid>
            <Grid item xs={1}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <PersonOutlineOutlined />
                    <SearchOutlined />
                    <FavoriteBorderOutlined />
                    <ShoppingCartOutlined />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Header;
