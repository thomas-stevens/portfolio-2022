import scrollJacking from './scrollJacking.js';


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
        })
        anchor.addEventListener('mouseleave', function () {
            body.style.backgroundColor = ''
            body.style.color = ''
        })

    })


}

changeBg()
scrollJacking()