function solve() {
    let checkBtn = document.getElementsByTagName('button')[0];
    let clearBtn = document.getElementsByTagName('button')[1];
    checkBtn.addEventListener('click', checkResult)
    clearBtn.addEventListener('click', clearInputs)


    let rowsRef = document.querySelector("tbody").children;
    let rows = Array.from(rowsRef);

    function clearInputs() {
        for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].children;
            for (let cell of cells) {
                let currentCell = cell.getElementsByTagName('input')[0];
                currentCell.value = ''
            }
        }
        document.querySelector('#check p').textContent = '';
        document.getElementsByTagName('table')[0].style.border = 'none';

    }


    function checkResult(ev) {
        let isValid = true;
        for (let i = 0; i < 3; i++) {
            let trRef = rows[i];
            let tr = trRef.querySelectorAll('td input');

            let coll1 = rows[0].children[i].querySelector('input').value;
            let coll2 = rows[1].children[i].querySelector('input').value;
            let coll3 = rows[2].children[i].querySelector('input').value;


            if (tr[0].value === tr[1].value || tr[0].value === tr[2].value || tr[1].value === tr[2].value) {
                isValid = false;
                break;
            }
            if (coll1 === coll2 || coll1 === coll3 || coll2 === coll3) {
                isValid = false;
                break;
            }


        }


        if (isValid) {
            document.querySelector('#check p').textContent = "You solve it! Congratulations!";
            document.querySelector('#check p').style.color = 'green';
            document.getElementsByTagName('table')[0].style.border = "2px solid green";
        } else {
            document.getElementsByTagName('table')[0].style.border = "2px solid red";
            document.querySelector('#check p').textContent = "NOP! You are not done yet..."
            document.querySelector('#check p').style.color = 'red';
        }
    }
}


