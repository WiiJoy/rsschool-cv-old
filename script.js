'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const examplies = document.querySelector('.examplies__edu')

    examplies.addEventListener('mouseover', (ev) => {
        console.log(ev.target)
        if (!ev.target.classList.contains('examplies__item__img')) return

        // console.log('examplies__item')

        let exampleItem = ev.target.nextElementSibling

        console.log(exampleItem)

        exampleItem.style.display = 'block'
        setTimeout(() => {
            exampleItem.style.opacity = 1
        }, 100)
    })
})