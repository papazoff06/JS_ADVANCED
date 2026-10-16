// function generateReport() {
//     let headers = document.querySelectorAll('thead tr th');
//     let entries = document.querySelectorAll('tbody tr td');
//     let output = [];
//     let obj = {};
//     for(let i = 0; i < headers.length; i ++){
//         let header = headers[i].getElementsByTagName('input')[0];
        
//         if(header.checked){
//             let key = headers[i].textContent;
//             let value = entries[i].textContent;
//             obj[key] = value;
//         }
//     }console.log(obj)
// }


// function generateReport() {
//     let headers = document.querySelectorAll('thead tr th');
//     let rows = document.querySelectorAll('tbody tr');
//     let arr = [];



//     for(let i = 0; i < rows.length; i ++){
//         let cells  = rows[i].getElementsByTagName('td');
//         let obj = {};

//         for(let j = 0; j < headers.length; j++){
//             let checkWord = headers[j].getElementsByTagName('input')[0];

//             if(checkWord.checked){
//             let key = headers[j].textContent;
//             let value = cells[j].textContent;
//             if(checkWord.checked){
//             obj[key] = value
//             }
            
//         }
        
//         }
//     }arr.push(obj)

//             console.log(arr)
// }   
    
function generateReport() {
    let headers = document.querySelectorAll('thead tr th');
    let rows = document.querySelectorAll('tbody tr'); // Селектираме редовете (tr), а не клетките (td)
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
                let key = headers[j].textContent.trim();
                let value = cells[j] ? cells[j].textContent.trim() : '';
                obj[key] = value;
            }
        }

        // Добавяме обекта (реда) в масива само ако има избрани колони
        if (Object.keys(obj).length > 0) {
            arr.push(obj);
        }
    }

    console.log(arr);
    return arr;
}
