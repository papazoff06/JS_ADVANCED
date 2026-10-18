function deleteByEmail() {
    let rows = document.querySelectorAll('tbody tr');
    let input = document.querySelector('input[name="email"]');
    let result = document.getElementById('result');
    for(let row of rows){
        let checkMail = row.children[1];
        if(checkMail.textContent == input.value){
            row.remove();
            result.textContent = 'Deleted.'
        }else{
            result.textContent = "Not found.";
        }
    }
    input.value = '';
}