const primaryNav = document.querySelector('header nav')
const navToggle = document.querySelector('.mobile-nav-toggle')
const mainBg = document.querySelector('main')

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
        mainBg.style.backgroundColor = "hsla(230, 13%, 9%, 0.9)"
    } else {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
        mainBg.style.backgroundColor = "transparent"
    }

})
