function solve() {
    let dataRef = document.getElementById('input');
    let data = dataRef.value.split('.').map(el => el.trim()).filter(el => el.length > 0);
    
    
    let result = '';
    for(let i = 0; i < data.length; i += 3){
        let output = data.slice(i, i + 3);
        let paragraphText = output.join('. ') + '.';
        let paragraph = `<p>${paragraphText}</p>`;
        result += paragraph;

    }
    
    document.getElementById('output').innerHTML = result;
}