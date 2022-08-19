import scrollJacking from './scrollJacking.js';
import customCursor from './customCursor.js';

// change bg color on hover
const anchors = document.querySelectorAll('.case')
const body = document.querySelector('body');

const changeBg = () => {
    anchors.forEach(item => {
        let anchor = item;
        anchor.addEventListener('mouseover', function () {
            let bgColor = anchor.getAttribute('data-bg-color');
            body.style.backgroundColor = bgColor;
            if (bgColor === '#000000') {
                body.style.color = "#FFF"
            }
            else if (bgColor === '#E7B873') {
                body.style.color = "#FFF"
            }
            else if (bgColor === '#6C6E7D') {
                body.style.color = "#FFF"
            }
            else if (bgColor === '#0202FF') {
                body.style.color = "#FFF"
            }
        })
        anchor.addEventListener('mouseleave', function () {
            body.style.backgroundColor = ''
            body.style.color = ''
        })

    })


}

changeBg()
scrollJacking()
customCursor()