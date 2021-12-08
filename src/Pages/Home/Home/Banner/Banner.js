import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../../../images/chair.png'
import bg from '../../../../images/bg.png';
const appoimentbd = {
    background: `url(${bg})`,
    backgroundColor: "rgba(236, 240, 241,1",
    backgroundBlendMode: 'lighten',
    height: 500
}
const Banner = () => {
    return (
        <Box style={appoimentbd} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <Box style={{ textAlign: 'left' }}>
                            <Typography sx={{ mb: 5, mt: 5 }} variant='h2' style={{ color: 'rgba(52, 73, 94,1.0)' }}>
                                Your New Smile <br /> Starte Hear
                            </Typography>
                            <Typography variant='h6' sx={{ mb: 5 }} style={{ color: 'rgba(52, 73, 94,1.0)', fontSize: 14, fontWeight: 300, }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit sit nesciunt quam vel aut, temporibus labore neque dolore expedita!
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: "rgba(129, 236, 236,1.0)" }}>GET APPOINTMENT</Button>
                        </Box>

                    </Grid>
                    <Grid sx={{ display: 'flex', alignItems: 'center' }} item xs={12} md={6}>
                        <img
                            style={{ width: 500 }}
                            src={doctor} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </Box >
    );
};

export default Banner;