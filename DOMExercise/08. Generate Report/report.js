    
function generateReport() {
    let headers = document.querySelectorAll('thead tr th');
    let rows = document.querySelectorAll('tbody tr'); 
    let arr = [];

    // Въртим цикъл по всеки един РЕД в таблицата
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td'); // Взимаме клетките само за текущия ред
        let obj = {};

        // Въртим цикъл по всяко ЗАГЛАВИЕ, за да проверим отметките
        for (let j = 0; j < headers.length; j++) {
            let checkWord = headers[j].getElementsByTagName('input')[0];
            
            // Проверяваме дали има чекбокс и дали е маркиран
            if (checkWord && checkWord.checked) {
                let key = checkWord.name;
                let value = cells[j] ? cells[j].textContent.trim() : '';
                obj[key] = value;
            }
        }

        // Добавяме обекта (реда) в масива само ако има избрани колони
        if (Object.keys(obj).length > 0) {
            arr.push(obj);
        }
        
    }
    let result = JSON.stringify(arr)
    document.getElementById('output').value = result
    return result;
}
