function sumTable() {
    let table = document.querySelectorAll("table tr");
    let result = 0;
    let sumRow = document.getElementById('sum');
    for(let i = 1; i < table.length - 1; i++){
        let cols = table[i].children;
        result += Number(cols[1].textContent);
    }
    sumRow.textContent = result;
}