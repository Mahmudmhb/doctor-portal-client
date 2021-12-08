import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png';
const appoimentbd = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, 0.8',
    backgroundBlendMode: 'darken',
    marginTop: 175
}

const AppoimentBanner = () => {
    return (
        <Box style={appoimentbd} sx={{ flexGrow: 1, my: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 510, marginTop: -120 }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <Box style={{ textAlign: 'left' }}>
                        <Typography sx={{ mb: 5, mt: 5 }} variant='h6' style={{ color: '#5CE7ED' }}>
                            Appoiment
                        </Typography>

                        <Typography sx={{ mb: 5 }} variant='h4' style={{ color: 'white' }}>
                            Make an Appoinment<br />Today
                        </Typography>

                        <Typography variant='h6' sx={{ mb: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300, }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit sit nesciunt quam vel aut, temporibus labore neque dolore expedita!
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>

                </Grid>

            </Grid>
        </Box >
    );
};

export default AppoimentBanner;