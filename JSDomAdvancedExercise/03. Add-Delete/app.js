function addItem() {
    let input = document.getElementById('newItemText');
    
   let li = document.createElement('li');
   li.textContent = input.value;
   let a = document.createElement('a');
   a.textContent = '[Delete]'
   a.setAttribute("href", "#");
   li.appendChild(a);
   document.getElementById('items').appendChild(li);

   
   
   
   input.value = '';
   

}