import './index.css'

let ticking = false
let counter = 1

function next() {
    const videos = document.getElementsByTagName('video')
    if (counter > 2) counter = 0
    Array.from(videos).forEach((el, index) => {
        if (index == counter) {
            el.classList.remove('hidden')
        } else {
            el.classList.add('hidden')
        }
    })

    counter ++
}


window.addEventListener('wheel', function(e) {
    if (!ticking) {
        ticking = true;
        this.setTimeout(function() {
            next()
            ticking = false
        }, 1200)
    }
})