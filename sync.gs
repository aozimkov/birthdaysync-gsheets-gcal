// using var instead of const because Google Apps Script hasn't support const
// But here's using UPPERCASE LETTERS for names which must be const
var CALENDAR_NAME = "Your Calendar name";
var EVENT_DEFAULT_TEXT = " - Birthday";

function main() {
  var rows = SpreadsheetApp.getActiveSpreadsheet().getDataRange();
  var numRows = rows.getNumRows();
  var values = rows.getValues();
  var calendar = CalendarApp.getCalendarsByName(CALENDAR_NAME);
  var currentCalendar;
  
  if(calendar.length > 0){
    currentCalendar = calendar[0];
  } else {
    var newCalendar = CalendarApp.createCalendar(CALENDAR_NAME);
    currentCalendar = newCalendar;
  }
  
  for(i=0; i < numRows; i++){
    
    // This fix empty cells when a table is generated with IMPORTRANGE
    if(values[i][1] == ""){
      break;
    }
    
    var currentEventName = values[i][0];
    var currentEventDate = new Date(values[i][1]);    
    if(!isEventExist(currentCalendar, currentEventName, currentEventDate)){
        addToCalendar(currentCalendar, currentEventName, currentEventDate);
    }
  }
}

function addToCalendar(calendar, name, date) {
  var currentEvent = calendar.createAllDayEventSeries(
     name + EVENT_DEFAULT_TEXT, date, CalendarApp.newRecurrence().addYearlyRule());
}

function isEventExist(calendar, name, date){
  var dayEvents = calendar.getEventsForDay( date);
  if (dayEvents.length > 0){  
    for (j = 0; j < dayEvents.length; j++){
      var dayEvent = dayEvents[j];      
      if (dayEvent.getTitle() == name + EVENT_DEFAULT_TEXT){
        return true;
      }
    }
  }
  return false;
}
