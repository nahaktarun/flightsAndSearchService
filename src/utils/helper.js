function compareTime(timestring, timestring2) {
  let datetime1 = new Date(timestring);
  let datetime2 = new Date(timestring2);

  return datetime1.getTime() > datetime2.getTime();
}

module.exports = compareTime;
