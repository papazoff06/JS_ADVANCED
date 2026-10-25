function attachEventsListeners() {
    let buttons = document.querySelectorAll('[type="button"]');

    buttons.forEach((b) => b.addEventListener('click', convertUnit));

    function convertUnit(ev){
        let data = ev.target.parentNode.children[1];
        let input = Number(data.value);
        let convertType = data.id;
        let result = parsToDay(convertType)

        function parsToDay(){
            if(convertType === 'days'){
                return input
            }
            else if(convertType === 'hours'){
                return input / 24
            }else if(convertType === 'minutes'){
                return input / 24 / 60
            }else if(convertType === 'seconds'){
                return input / 24 / 60 / 60
            }
        }
        for (let button of buttons){
            if(button === ev.target){
                continue;
            }
            let text = button.previousElementSibling;
            if(text.id === 'days'){
                text.value = result;
            }else if(text.id === 'hours'){
                text.value = result * 24;
            }else if(text.id === 'minutes'){
                text.value = result * 24 * 60;
            }else if(text.id === 'seconds'){
                text.value = result * 24 * 60 * 60;
            }
        }
    }
}