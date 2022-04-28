const dropdown = document.querySelector('.dropdown');
const dropdown_list = dropdown.querySelector('.dropdown__list');
const dropdown_value = dropdown.querySelector('.dropdown__value');
const dropdown_items = dropdown_list.querySelectorAll('.dropdown__item');
let change_class_foo = () => {
    dropdown_list.classList.toggle('dropdown__list_active');
    dropdown_list.style.position = 'relative';
    dropdown_list.style.left = '0';
    dropdown_list.style.width = '100px';
    dropdown_list.style.margin = '0 auto';
}
let change_value_foo = (el) => {
    dropdown_value.innerHTML = `${el.textContent}`;
}

dropdown.addEventListener('click', change_class_foo)

// Array.from(dropdown_items).forEach(element => {
//     element.addEventListener('click', (event) => {
//         event.preventDefault()
//         change_value_foo(element)
//         if (element.closest('.dropdown__list').classList.contains('dropdown__list_active')) {
//             element.closest('.dropdown__list').classList.toggle('dropdown__list_active')
//         }
//     })
// })
// Не понимаю, есть ли разница, и стоит ли так перебирать элементы, для каждого из которых верятно событие?

dropdown_list.addEventListener('click', (event) => {
    event.preventDefault()
    if (Array.from(dropdown_items).includes(event.target.closest('.dropdown__item'))) {
        change_value_foo(event.target)
        if (event.target.closest('.dropdown__list').classList.contains('dropdown__list_active')) {
            event.target.closest('.dropdown__list').classList.toggle('dropdown__list_active')
            event.stopPropagation()
        }
    }   
})

