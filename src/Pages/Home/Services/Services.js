import { Grid, Box, Container, Typography } from '@mui/material';
import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import secound from '../../../images/cavity.png'
import thired from '../../../images/whitening.png'


const services = [
    {
        name: 'Mahmuddul hasan',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat incidunt asperiores ducimus minus nam adipisci iste quidem quisquam vero voluptate!',
        img: fluoride
    },
    {
        name: 'Mahmud bijoy',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat incidunt asperiores ducimus minus nam adipisci iste quidem quisquam vero voluptate!',
        img: secound
    },
    {
        name: 'Mahmud',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat incidunt asperiores ducimus minus nam adipisci iste quidem quisquam vero voluptate!',
        img: thired
    }
]


const Services = () => {

    return (

        <Container>
            <Typography variant="h5" sx={{ fontWeight: 500, m: 2 }} component="div">
                OUR SERVICES
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, m: 5 }} component="div">
                Service we provite
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        />
                        )
                    }
                </Grid>
            </Box>
        </Container>

    );
};

export default Services;