function addItem() {
        let newItemTextRef = document.getElementById('newItemText');
        let newItemValueRef = document.getElementById('newItemValue');
        let selectElement = document.getElementById('menu');
        let option = document.createElement('option');
        option.textContent = newItemTextRef.value;
        option.value = newItemValueRef.value;
        selectElement.appendChild(option);
        newItemTextRef.value = '';
        newItemValueRef.value = '';
}