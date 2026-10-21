function validate() {
    let email = document.getElementById('email');
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/
    email.addEventListener('change', validateMail);


    
    function validateMail(ev){
        let text = ev.target.value;
        if(!pattern.test(text)){
            ev.target.className = 'error'
        }else{
            ev.target.classList.remove('error');

        }
        
    }
}