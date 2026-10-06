function extractText() {
    let items = document.getElementsByTagName('li');
    let textArea = document.getElementById('result');
    textArea.value = ''
    for (let i = 0; i < items.length; i++){
        textArea.value += items[i].textContent + '\n';
    }
}