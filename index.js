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
  return {type: time, date: dateStamp.substring(0, 10), hour: dateStamp.slice(-4)}
}

function createTimeInEvent(record, dateStamp){
  record.timeInEvents.push(dateStamper('Time In', dateStamp));
  return record;
}

function createTimeOutEvent(){}

