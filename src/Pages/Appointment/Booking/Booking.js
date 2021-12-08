import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>

                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h4" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ pt: 2 }} variant="h5" component="div">
                        {time}
                    </Typography>
                    <Typography sx={{ py: 2 }} variant="caption" component="div">
                        {space} Space Available only
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>

            </Grid>
            <BookingModal
                date={date}
                setBookingSuccess={setBookingSuccess}
                open={open}
                handleClose={handleClose}
                booking={booking}


            > </BookingModal>
        </>


    );
};

export default Booking;