const {google} = require('googleapis');
const {Oauth2} = google.auth;

const oAuth2Client = new Oauth2(client_id, client_secret);

oAuth2Client.setCredentials({
    refresh_token:
    insert_refresh_token,
});

const calender = google.calender({version : 'v3', auth: oAuth2Client});
//sample start and end times, should be taken from react frontend form
const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDay() + 2);

const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDay() + 2);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 50);
//the event should be taken from frontend
const event = {

    colorId: 1,
    start: {
      dateTime: eventStartTime,
      timeZone: 'Bangladesh/Dhaka',
    },
    end: {
      dateTime: eventEndTime,
      timeZone: 'Bangladesh/Dhaka',
    },
  }


  //free busy query
  calendar.freebusy.query(
    {
      resource: {
        timeMin: eventStartTime,
        timeMax: eventEndTime,
        timeZone: 'Bangladesh/Dhaka',
        items: [{ id: 'primary' }],
      },
    },
    (err, res) => {
      // Check for errors in our query and log them if they exist.
      if (err) return console.error('Free Busy Query Error: ', err);
  
      // Create an array of all events on our calendar during that time.
      const eventArr = res.data.calendars.primary.busy;
  
      // Check if event array is empty which means we are not busy
      if (eventArr.length === 0)
        // If we are not busy create a new calendar event.
        return calendar.events.insert(
          { calendarId: 'primary', resource: event },
          err => {
            // Check for errors and log them if they exist.
            if (err) return console.error('Error Creating Calender Event:', err)
            // Else log that the event was created.
            return console.log('Calendar event successfully created.');
          }
        )
        // If event array is not empty log that we are busy.
    return console.log(`Timeslot not available`)
  }
)