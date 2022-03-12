'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const examplies = document.querySelectorAll('.examplies__item'),
          burger = document.querySelector('.hamburger'),
          container = document.querySelector('.container'),
          nav = document.querySelector('.nav'),
          wrapper = document.querySelector('.wrapper');
    // let currItem = ''

    examplies.forEach(item => {
        item.addEventListener('mouseover', (ev) => {
            examplies.forEach(item => item.classList.remove('examplies__item_active'))

            item.classList.add('examplies__item_active')
        })
    
        item.addEventListener('mouseout', (ev) => {
            if (ev.toElement && (ev.toElement.classList.contains('examplies__item__img') || ev.toElement.classList.contains('examplies__item__descr'))) return

            item.classList.remove('examplies__item_active')
        })
    })

    burger.addEventListener('click', () => {
        burger.classList.toggle('hamburger_active')
        container.classList.toggle('container_inactive')
        nav.classList.toggle('nav_active')
        wrapper.classList.toggle('wrapper_active')
    })
})