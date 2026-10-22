function attachGradientEvents() {
    
    let hoverArea = document.getElementById('gradient');
    let result = document.getElementById('result');
    hoverArea.addEventListener('mousemove', getInfo);
    hoverArea.addEventListener('mouseout', removeResult);


    function  getInfo(ev) {
        let position = Number(ev.offsetX);
        result.textContent = Math.round((position - 1) / 3) + '%';
    }

    function removeResult(){
        document.getElementById('result').textContent = '';
    }
    
}