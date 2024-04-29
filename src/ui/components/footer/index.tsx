import React from 'react';
import {Grid, Typography, Link, Box, TextField, Stack, Button} from "@mui/material";
import Divider from '@mui/material/Divider';

export function Footer() {
    return (
        <Grid container spacing={2} paddingX={10} paddingY={5}>
            <Grid container xs={12} md={7} lg={4} spacing={4}>
                <Grid item >
                    <Stack spacing={5}>
                        <Typography variant={'h5'}>Furniro.</Typography>
                        <Typography color={'gray'}>400 University Drive Suite 200 Coral Gables,<br/>
                            FL 33134 USA</Typography>
                    </Stack>

                </Grid>
            </Grid>

            <Grid container xs={12} md={7} lg={8} spacing={4}>
                <Grid item xs={6} lg={3}>
                        <Stack spacing={5}>
                            <Typography color={'gray'}>
                                Links
                            </Typography>
                            <Link
                                href="/"
                                color="black"
                                underline="none"
                                display={"flex"}
                                alignItems={"center"}
                            >
                                Home
                            </Link>
                            <Link
                                href="/shop"
                                color="black"
                                underline="none"
                                display={"flex"}
                                alignItems={"center"}
                            >
                                Shop
                            </Link>
                            <Link
                                href="/about"
                                color="black"
                                underline="none"
                                display={"flex"}
                                alignItems={"center"}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                color="black"
                                underline="none"
                                display={"flex"}
                                alignItems={"center"}
                            >
                                Contact
                            </Link>
                        </Stack>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Stack spacing={5}>
                        <Typography color={'gray'}>
                            Help
                        </Typography>
                        <Link
                            href="/"
                            color="black"
                            underline="none"
                            display={"flex"}
                            alignItems={"center"}
                        >
                            Payment Options
                        </Link>
                        <Link
                            href="/shop"
                            color="black"
                            underline="none"
                            display={"flex"}
                            alignItems={"center"}
                        >
                            Returns
                        </Link>
                        <Link
                            href="/about"
                            color="black"
                            underline="none"
                            display={"flex"}
                            alignItems={"center"}
                        >
                            Privacy Policies
                        </Link>
                    </Stack>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Stack spacing={2}>
                    <Typography color={'gray'}>
                        Newsletter
                    </Typography>
                    <Stack direction="row" spacing={5} alignItems={"center"}>
                        <TextField id="standard-basic" label="Enter Your Email Address" variant="standard" />
                        <Button href="/" sx={{color: 'black', borderBottomWidth: 1,borderColor: 'black', border: '1px 1px 0px 0px'}}>SUBSCRIBE</Button>
                    </Stack>
                    </Stack>
                </Grid>
            </Grid>



            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                flexDirection={{ xs: 'column', sm: 'row' }}
                paddingTop={2}
                sx={{ fontSize: '12px' , width: '100%' }}
            >
                <Grid item sx={{width:'100%'}}>
                    <Divider/>
                    <Typography paddingTop={4}>2023 furino. All rights reverved</Typography>
                </Grid>
            </Grid>

        </Grid>
    );
}
