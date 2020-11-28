
let ourForm = document.getElementById('form');
let theField = document.getElementById('field');
let list = document.getElementById('list');

ourForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    createItem(theField.value)
    
});

function createItem(x){
    let ourHTML = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`
    list.insertAdjacentHTML('beforeend', ourHTML);
    theField.value = ''
    theField.focus()
}

function deleteItem(el){
    el.parentElement.remove()
}