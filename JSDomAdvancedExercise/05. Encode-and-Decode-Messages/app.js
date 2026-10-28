function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');

    let [encodeBut, decodeBut] = Array.from(buttons);
    encodeBut.addEventListener('click', encodeData);
    decodeBut.addEventListener('click', decodeData);

    function encodeData(ev){
        let data = ev.target.parentNode.parentNode.getElementsByTagName('textarea')[0];
        let reciever = ev.target.parentNode.parentNode.getElementsByTagName('textarea')[1];
        
        let middleResult = ''
        for(let char of data.value){
            let numChar = char.charCodeAt(0) + 1;
            middleResult += String.fromCharCode(numChar);
        }
        reciever.value = middleResult;
        data.value = '';

    }

    function decodeData(ev){
        let reciever = ev.target.parentNode.parentNode.getElementsByTagName('textarea')[1];
        let middleResult = '';
        for(let char of reciever.value){
            let charNum = char.charCodeAt(0) - 1;
            middleResult += String.fromCharCode(charNum);
            reciever.value = middleResult;
        }
    }
}