
const nav = document.getElementById('tk-nav')
const navToggle = document.getElementById('tk-nav-toggle')
const navOverlay = document.getElementById('tk-nav-overlay')

let visible = false

const setVisible = (newVisible) => {
    visible = newVisible

    toggleClass(nav, 'h-full', 'h-0')
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

navToggle.addEventListener('click', () => setVisible(!visible))
navOverlay.addEventListener('click', () => setVisible(!visible))

setVisible(false)