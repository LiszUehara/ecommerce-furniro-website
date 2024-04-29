import Header from "../../ui/components/header";
import { Grid, Stack, Typography } from "@mui/material";

export const NotFound = () => {
    return (
        <Grid>
            <Header />
            <Stack spacing={2}>
                <Typography sx={{ textAlign: 'center', padding: 5 }} variant={"h1"}>PAGE NOT FOUND</Typography>
            </Stack>

        </Grid>
    )
}
