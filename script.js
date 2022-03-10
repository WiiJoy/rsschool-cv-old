'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const examplies = document.querySelectorAll('.examplies__item')
    // let currItem = ''

    examplies.forEach(item => {
        item.addEventListener('mouseover', (ev) => {
            examplies.forEach(item => item.classList.remove('examplies__item_active'))

            // currItem = ev.currentTarget
            // console.log(currItem)

            item.classList.add('examplies__item_active')
    
            // if (ev.currentTarget.classList.contains('examplies__item')) console.log('DCGKSNBT')
    
            // if (!ev.target.classList.contains('examplies__item__img')) return
    
            // let exampleItem = item.querySelector('.examplies__item__descr')
    
            // exampleItem.style.display = 'block'
            // exampleItem.style.opacity = 1
        })
    
        item.addEventListener('mouseout', (ev) => {
            if (!ev.toElement.classList.contains('examplies__edu')) return

            item.classList.remove('examplies__item_active')
            // console.log(ev.target.parentElement.parentElement.parentElement)
            // if (!ev.target.classList.contains('examplies__item__img') || ev.toElement.classList.contains('examplies__code__descr')) return
    
            // let exampleItem = item.querySelector('.examplies__item__descr')
    
            // exampleItem.style.opacity = 0
            // exampleItem.style.display = 'none'
            
            // setTimeout(() => , 300)
        })
    })

    // function changeCurrItem(item) {
    //     if (!currItem) {
    //         currItem = item
    //         return
    //     }

    //     currItem.querySelector('.examplies__item__descr').style.opacity = 0
    //     currItem.querySelector('.examplies__item__descr').style.display = 'none'


    // }




    // examplies.addEventListener('mouseover', (ev) => {
    //     console.log(ev.currentTarget)

    //     if (ev.currentTarget.classList.contains('examplies__item')) console.log('DCGKSNBT')

    //     if (!ev.target.classList.contains('examplies__item__img')) return

    //     let exampleItem = ev.target.nextElementSibling

    //     exampleItem.style.display = 'block'
    //     setTimeout(() => exampleItem.style.opacity = 1, 100)
    // })

    // examplies.addEventListener('mouseout', (ev) => {
    //     console.log(ev.target.parentElement.parentElement.parentElement)
    //     if (!ev.target.classList.contains('examplies__item__img') || ev.toElement.classList.contains('examplies__code__descr')) return

    //     let exampleItem = ev.target.nextElementSibling

    //     exampleItem.style.opacity = 0
        
    //     setTimeout(() => exampleItem.style.display = 'none', 300)
    // })
})