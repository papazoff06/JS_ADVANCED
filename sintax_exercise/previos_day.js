function previosDay(y, m, d) {
    let date = new Date(y, m, d);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate() - 1;
    let daysInMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day !== 0) {
        console.log(`${year}-${month}-${day}`)
    }
    else {
        month = month - 1;
        day = daysInMonths[month];
        console.log(`${year}-${month}-${day}`)
    }
}

previosDay(2016, 9, 30);
previosDay(2015, 5, 1);