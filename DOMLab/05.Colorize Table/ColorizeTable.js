function colorize() {
    let elements = document.getElementsByTagName('tr');
    console.log(elements)
    for(let i = 1; i < elements.length; i += 2){
        elements[i].style.background = 'teal';
    }

}