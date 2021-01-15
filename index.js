function createEmployeeRecord(arr){
  let record = {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [], 
    timeOutEvents: []
  }
  return record;
}

function createEmployeeRecords(arr){
  return arr.map(createEmployeeRecord);
}

function dateStamper(time, dateStamp){
  return {type: time, date: dateStamp.substring(0, 10), hour: parseInt(dateStamp.slice(-4))}
}

function createTimeInEvent(record, dateStamp){
  record.timeInEvents.push(dateStamper('TimeIn', dateStamp));
  return record;
}

function createTimeOutEvent(record, dateStamp){
  record.timeOutEvents.push(dateStamper('TimeOut', dateStamp));
  return record;
}

function hoursWorkedOnDate(record, workDate){
  let timeIn = record.find(timeInEvents => time)
}

