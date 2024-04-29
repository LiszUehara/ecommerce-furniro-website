import { Grid, Typography } from '@mui/material';
import { EmojiEventsOutlined } from '@mui/icons-material';

export function EcommerceFeaturesArea () {
    return (
        <Grid container paddingX={5} paddingY={7} bgcolor={'#FAF3EA'} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={3} sx={{textAlign: 'start'}}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <EmojiEventsOutlined sx={{ fontSize: 60 }}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            High Quality
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#898989'}}>
                            Crafted from top materials
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} sx={{textAlign: 'start'}}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <EmojiEventsOutlined sx={{ fontSize: 60 }}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            Warranty Protection
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#898989'}}>
                            Over 2 years
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} sx={{textAlign: 'start'}}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <EmojiEventsOutlined sx={{ fontSize: 60 }}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            Free Shipping
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#898989'}}>
                            Order over 150 $
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} sx={{textAlign: 'start',}}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <EmojiEventsOutlined sx={{ fontSize: 60 }}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" >
                            24/7 Support
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#898989'}}>
                            Dedicated support
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
