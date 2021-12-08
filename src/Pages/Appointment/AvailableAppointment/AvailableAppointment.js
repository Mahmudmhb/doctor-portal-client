import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';
const Bookings = [
    {
        id: 1,
        name: 'Pediatric Dentel',
        time: '06.00 PM - 07.00 PM',
        space: 10
    },
    {
        id: 2,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 7
    },
    {
        id: 3,
        name: ' Dentel',
        time: '08.00 PM - 09.00 PM',
        space: 5
    },
    {
        id: 4,
        name: 'Pediatric ',
        time: '09.00 PM - 10.00 PM',
        space: 6
    },
    {
        id: 5,
        name: 'Pediatric Dentel',
        time: '10.00 PM - 11.00 PM',
        space: 2
    },
    {
        id: 6,
        name: 'Pediatric Dentel',
        time: '07.00 AM - 08.30 AM',
        space: 8
    }
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', p: 5 }}>Available Appointment {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Submint we will Review Soon!!!</Alert>
            }
            <Grid container spacing={2}>
                {
                    Bookings.map(booking => <Booking
                        setBookingSuccess={setBookingSuccess}
                        date={date}
                        key={booking.id}
                        booking={booking}

                    />)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;