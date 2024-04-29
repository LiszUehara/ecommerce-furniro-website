import { Grid, Stack, Typography } from "@mui/material";
import { EmojiEventsOutlined } from "@mui/icons-material";
import React from "react";

export function InfoShopCard() {
    return (
        <Grid container rowSpacing={1} padding={5} justifyContent={'center'} columnSpacing={{ xs: 1, sm: 2, md: 3 }} bgcolor={'#FAF3EA'}>
            <Grid item>
                <Stack>
                    <EmojiEventsOutlined sx={{ fontSize: 60 }} />
                    <Typography >High Quality</Typography>
                    <Typography color={'#898989'}>crafted from top materials</Typography>
                </Stack>
            </Grid>
            <Grid item>2</Grid>
            <Grid item>3</Grid>
            <Grid item>4</Grid>

        </Grid>
    )
}
