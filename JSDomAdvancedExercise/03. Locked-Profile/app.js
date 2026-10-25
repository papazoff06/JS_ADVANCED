function lockedProfile() {
    let buttonsRef = document.getElementsByTagName('button');
    Array.from(buttonsRef).forEach((b) => b.addEventListener('click', profileInfo));

    function profileInfo(ev) {
        let button = ev.target;
        let profile = ev.target.parentNode;
        let checkBoxes = profile.getElementsByTagName('input');
        let lock = checkBoxes[0];
        let unLock = checkBoxes[1];



        if (unLock.checked) {
            if (button.textContent === 'Show more') {
                profile.getElementsByTagName('div')[0].style.display = 'block';
                button.textContent = 'Hide it'

            } else if (button.textContent === 'Hide it') {

                if (!button.checked) {
                    button.style.disabled = 'true';
                }
                profile.getElementsByTagName('div')[0].style.display = 'none';
                button.textContent = 'Show more'
            }
        }

    }
}
