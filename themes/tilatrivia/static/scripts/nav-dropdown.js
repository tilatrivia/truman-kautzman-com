
document.addEventListener('keyup', () => console.log(document.activeElement))

const nav = document.getElementById('tk-nav')
const navOverlay = document.getElementById('tk-nav-overlay')

let visible = false

const setVisible = (newVisible) => {
    visible = newVisible

    // toggleClass(nav, 'h-min', 'h-0')
    if (visible) {
        nav.style.height = nav.scrollHeight + 'px'
    } else {
        nav.style.height = '0px'
    }

    toggleClass(navOverlay, 'bg-black/50', 'bg-black/0')
    toggleClass(navOverlay, 'pointer-events-auto', 'pointer-events-none')
}

const toggleClass = (element, openClass, closedClass) => {
    if (visible) {
        element.classList.add(openClass)
        element.classList.remove(closedClass)
    } else {
        element.classList.remove(openClass)
        element.classList.add(closedClass)
    }
}

nav.addEventListener('focusin', () => setVisible(true))
nav.addEventListener('focusout', () => setVisible(false))
navOverlay.addEventListener('click', () => setVisible(!visible))
document.getElementById('tk-nav-toggle').addEventListener('click', () => setVisible(!visible))


setVisible(false)