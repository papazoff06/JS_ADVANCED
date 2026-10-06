function editElement(ref, match, replacer) {
    let data = ref.textContent;
    let result = data.replace(new RegExp(match, 'g'), replacer);
    let newText = document.getElementById('e1');
    ref.textContent = result;
    return newText;
}

