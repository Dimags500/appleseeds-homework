const leepYear = (year) => {
  if (year % 4 == 0) {
    if (year % 100 == 0 && !(year % 400 == 0)) {
      console.log("This is not a leap year  ");
      return;
    }

    console.log('"It is indeed a leap year');
  }
};

leepYear(2012);
leepYear(2100);
leepYear(2400);
