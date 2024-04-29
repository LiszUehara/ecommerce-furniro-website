import { Box, Typography } from "@mui/material";
import React from "react";

export function Banner() {
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',  // Altera a direção da flexbox para vertical
            alignItems: 'flex-end',   // Alinha os itens na extremidade direita da flexbox
            justifyContent: 'flex-end', // Alinha os itens na extremidade inferior da flexbox
            backgroundImage: 'url("/img.jpg")', // Substitua pelo caminho da sua imagem
            backgroundSize: 'cover',
            height: 500,
            paddingRight: '30px'
        }}>
            <Box style={{ 
                backgroundColor: '#FFF3E3', 
                padding: 10, 
                borderRadius: '10px 10px 0 0', 
                height: '50%',
                display: 'flex',  
                flexDirection: 'column',
                alignSelf: 'flex-end',  // Alinha este box na extremidade inferior da flexbox
                marginTop: 'auto'  // Move o box para a extremidade inferior
            }}>
                <Typography variant="body1" style={{ color: '#333333' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </Typography>
            </Box>
        </Box>
    )
}


