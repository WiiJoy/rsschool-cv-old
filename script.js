'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const examplies = document.querySelectorAll('.examplies__item')
    // let currItem = ''

    examplies.forEach(item => {
        item.addEventListener('mouseover', (ev) => {
            examplies.forEach(item => item.classList.remove('examplies__item_active'))

            item.classList.add('examplies__item_active')
        })
    
        item.addEventListener('mouseout', (ev) => {
            if (!ev.toElement.classList.contains('examplies__edu')) return

            item.classList.remove('examplies__item_active')
        })
    })
})