const navigation = document.querySelector('.tab__navigation')
const tabs = Array.from(document.querySelectorAll('.tab'))
const contents = document.querySelectorAll('.tab__content')

let foo = (object, option1, option2) => {
    if(!object.classList.contains(`${option1}`)) {
        object.closest(`.${option2}`).querySelector(`.${option1}`).classList.remove(`${option1}`);
        object.classList.add(`${option1}`)
    }
}

navigation.addEventListener('click', event => {
    if(tabs.includes(event.target)) {
        foo(event.target, 'tab_active', 'tab__navigation')
    var current_num = tabs.indexOf(event.target)
    foo(contents[current_num], 'tab__content_active', 'tab__contents')
    }
    
})


