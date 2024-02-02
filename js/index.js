const ul = document.querySelector('ul');
const inputElement = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const tempInput = inputElement.value;
    inputElement.value = '';

    const list = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = tempInput;

    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.classList.add('delete');

    list.appendChild(span);
    list.appendChild(button);

    ul.appendChild(list);

    const deleteBtn = document.querySelectorAll('.delete');

    deleteBtn.forEach((delBtn) => {
        delBtn.addEventListener('click', () => {
            delBtn.parentElement.remove();
        });

    inputElement.focus();
});

});



