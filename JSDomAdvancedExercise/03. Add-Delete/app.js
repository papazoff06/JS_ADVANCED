function addItem() {
    let input = document.getElementById('newItemText');
    let items = document.getElementById('items');
   let li = document.createElement('li');
   li.textContent = input.value;
   let a = document.createElement('a');
   a.textContent = '[Delete]'
   a.setAttribute("href", "#");
   li.appendChild(a);
   items.appendChild(li);
   items.addEventListener('click', (ev) => {
        let item = ev.target.parentNode;
        item.remove();
   })
   input.value = '';
}