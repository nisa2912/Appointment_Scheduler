import React, { useState } from 'react';
import { Container, AppBar, Typography, Grid } from '@material-ui/core';

import DateMomentUtils from '@date-io/moment'; 
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import useStyles from './style';


function App() {

const classes = useStyles();

const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">Appointment Booking Widget</Typography>
      </AppBar>

    <Grid container spacing={2} columns={16}>

      <MuiPickersUtilsProvider utils={DateMomentUtils}>

      <Grid item xs={4}>

    
      <KeyboardDateTimePicker
        variant="inline"
        ampm={false}
        label="Start Event"
        value={selectedDate}
        onChange={handleDateChange}
        onError={console.log}
        disablePast
        format="yyyy/MM/dd HH:mm"
      />

      </Grid>

      
      <Grid item xs={4}>

      <KeyboardDateTimePicker
        variant="inline"
        ampm={false}
        label="End Event"
        value={selectedDate}
        onChange={handleDateChange}
        onError={console.log}
        disablePast
        format="yyyy/MM/dd HH:mm"
      /> 
      </Grid>


    </MuiPickersUtilsProvider>

    </Grid>

    </Container>

   
  );
}

export default App;
