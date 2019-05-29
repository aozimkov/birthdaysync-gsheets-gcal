# Example script Load Birthday Events from Google Sheets to Google Calendar by Google Apps Script
## birthdaysync-gsheets-gcal


IMPORTANT: Be carefully when you make a changes in the script, because script can remove data from existing calendar!
NO ANY WARRANTY. DO NOT USE THIS PROGRAM WITH REAL DATA. IT CAN BE LOST 


For use this example script you should create new sheet in Google Sheets by this columns scheme (Name, Birthday date)

After the table is created please open **Tools > Script editor** and paste all from sync.gs as is.
When you run script at first time it asks you about a premissions You need to accept it.

## Constants

When you are setting up the script you can use following constants:

### CALENDAR_NAME

CALENDAR_NAME = "Your Calendar name";

Setup you own calendar name. If you want to use existing calendar it is absolutely no problem this script wont remove any events if its title not equals name+EVENT_DEFAULT_TEXT

### EVENT_DEFAULT_TEXT

EVENT_DEFAULT_TEXT = " - Birthday";

Set a postfix for Event title.

### BEGIN_ROW_NUMBER

BEGIN_ROW_NUMBER = 1; 

It is equals one by default if you data table hasn't columns header, if has - please setup here the first number of row with the data.
