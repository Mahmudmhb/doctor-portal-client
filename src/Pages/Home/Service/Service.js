import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (

        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', margin: '0 auto' }}
                    image={img}
                // alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default Service;