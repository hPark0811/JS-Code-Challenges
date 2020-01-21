checkCalendar()

function checkCalendar(calA, calB, aBusinessHour, bBusinessHour) {
  // boundary check
  availableHours = [[...aBusinessHour]];
  if (availableHours[0] < bBusinessHour[0]){
    availableHours[0][0] = bBusinessHour[0];
  }
  if (availableHours[1] > bBusinessHour[1]){
    availableHours[0][1] = bBusinessHour[1];
  }

  checkCalendar(availableHours, calA);
  checkCalendar(availableHours, calB);

}

checkCalendar(availableHours, cal) {
  cal.forEach((meeting) => {
    availableHours = availableHours.reduce((availableHours, avHour) => {
      const availStart = avHour[0];
      const availEnd = avHour[1];
      const meetingStart = meeting[0];
      const meetingEnd = meeting[1];

      if (meetingStart > availStart && meetingEnd < availEnd){
          return ([], [])
      }
    })
  })
}