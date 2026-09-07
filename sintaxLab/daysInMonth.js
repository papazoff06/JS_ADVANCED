function findDays(month, year) {
    // Index 0 is a placeholder so Month 1 = January, Month 2 = February, etc.
    let daysInMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check if it's February and a leap year
    if (month === 2 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
        return 29;
    }

    console.log(daysInMonths[month]);
}

findDays(1, 2012);
findDays(2, 2021);