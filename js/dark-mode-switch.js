const darkSwitch = document.getElementById('darkSwitch');
window.addEventListener('load', () => {
    if (darkSwitch) {
        initTheme();
        darkSwitch.addEventListener('change', () => {
            resetTheme();
        });
    }
});


/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
var x = document.getElementsByClassName('Navbar');

function initTheme() {
    const darkThemeSelected =
        localStorage.getItem('darkSwitch') !== null &&
        localStorage.getItem('darkSwitch') === 'dark';
    darkSwitch.checked = darkThemeSelected;
    darkThemeSelected ? document.body.classList.add('bootstrap-dark') :
        document.body.classList.remove('bootstrap-dark');
    darkThemeSelected ? document.getElementById('nav-logo').src = "../img/logo-dark.png" : document.getElementById('nav-logo').src = "../img/logo.png";
    darkThemeSelected ? document.getElementById('mid-1').src = "../img/mid-dark-1.png" : document.getElementById('mid-1').src = "../img/mid-1.png";
    darkThemeSelected ? document.getElementById('mid-2').src = "../img/mid-dark-2.png" : document.getElementById('mid-2').src = "../img/mid-2.png";
    darkThemeSelected ? document.getElementById('mid-3').src = "../img/mid-dark-3.png" : document.getElementById('mid-3').src = "../img/mid-3.png";
}


/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme() {
    if (darkSwitch.checked) {
        document.body.classList.add('bootstrap-dark');
        document.getElementById('nav-logo').src = "../img/logo-dark.png";
        document.getElementById('mid-1').src = "../img/mid-dark-1.png";
        document.getElementById('mid-2').src = "../img/mid-dark-2.png";
        document.getElementById('mid-3').src = "../img/mid-dark-3.png";
        localStorage.setItem('darkSwitch', 'dark');
    } else {
        document.body.classList.remove('bootstrap-dark');
        localStorage.removeItem('darkSwitch');
        document.getElementById('nav-logo').src = "../img/logo.png";
        document.getElementById('mid-1').src = "../img/mid-1.png";
        document.getElementById('mid-2').src = "../img/mid-2.png";
        document.getElementById('mid-3').src = "../img/mid-3.png";
    }
}