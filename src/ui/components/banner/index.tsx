import {Box, Typography} from "@mui/material";
import React from "react";

export function Banner () {
    return(
        <Box style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundImage: 'url("/img.jpg")', // Replace with your image path
            backgroundSize: 'cover',
            height: 500,
            paddingRight: '30px'
        }}>
            <Box style={{backgroundColor: '#FFF3E3', padding: 10, borderRadius: '10px 10px 0 0'}}>
                <Typography variant="body1" style={{color: '#333333'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </Typography>
            </Box>
        </Box>
    )
}
