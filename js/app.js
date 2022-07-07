// change bg color on hover
const anchors = document.querySelectorAll('.case')
const body = document.querySelector('body');

const changeBg = () => {
    anchors.forEach(item => {
        let anchor = item;
        anchor.addEventListener('mouseenter', function () {
            body.style.backgroundColor = anchor.getAttribute('data-bg-color')
        })
        anchor.addEventListener('mouseleave', function () {
            body.style.backgroundColor = ''
        })
    })
}
changeBg()