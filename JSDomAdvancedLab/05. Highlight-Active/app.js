function focused() {
    let container = document.querySelector('div').children;

    for (let el of container){
        let input = el.getElementsByTagName('input')[0];
        input.addEventListener('focus', getFocused);
        input.addEventListener('blur', getBlured);
    }


    function getFocused(ev) {
        ev.target.parentNode.className = 'focused';

    }

    function getBlured(ev) {
        ev.target.parentNode.classList.remove('focused');

    }
}