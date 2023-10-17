function onLoad(arg) {
    document.addEventListener("click", function() {
        toggleFullScreen();
    });
}
function onLoad(arg) {
    document.addEventListener("click", function() {
        toggleFullScreen();
    });
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // Enter full-screen mode
        function launchIntoFullscreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }
        launchIntoFullscreen(document.documentElement);
        
        // Focus on an input field to potentially trigger the keyboard
        const inputField = document.getElementById('yourInputFieldId'); // Change to the actual ID of your input field
        if (inputField) {
            inputField.focus();
        }
    }
    
    document.querySelector('#monitor').style.backgroundColor = "#161913";
    const nodisplays = document.querySelectorAll('.nodisplay');
    nodisplays.forEach(nodisplay => nodisplay.classList.remove('nodisplay'));

    document.querySelector('.enter-text').classList.add('nodisplay');
    document.querySelector('.background-image').classList.add('nodisplay');

    const promptKey = document.querySelector('.prompt-key');
    promptKey.innerHTML = "B C F E";
    promptKey.innerHTML += "\tB C E D";
    promptKey.innerHTML += "\tB C F E D C";
}
