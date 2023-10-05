let sun_icon = document.getElementById('sun-icon')
let moon_icon = document.getElementById('moon-icon')
let main_container = document.getElementById('main-container')

sun_icon.addEventListener('click', () => {

    main_container.style.backgroundColor = 'white'
    sun_icon.classList.add('sun-icon')
    moon_icon.classList.remove('moon-icon')



})

moon_icon.addEventListener('click', () => {
    main_container.style.backgroundColor = '#222222'
    moon_icon.classList.add('moon-icon')
    sun_icon.classList.remove('sun-icon')
})
