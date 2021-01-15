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

function dateStamp(time, dateStamp){
  return {type: time, date: dateStamp.substring(0, 10), hour:}
}

function createTimeInEvent(){}

function createTimeOutEvent(){}

