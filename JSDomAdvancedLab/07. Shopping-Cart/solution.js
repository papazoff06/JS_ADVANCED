function solve() {
   let cart = document.getElementsByClassName('product');
   let textArea = document.getElementsByTagName('textarea')[0];
   let result = {};
   let checkOutButton = document.getElementsByClassName('checkout')[0];
   checkOutButton.addEventListener('click', checkOut)


   for (row of cart) {
      let button = row.getElementsByClassName('product-add')[0].getElementsByClassName('add-product')[0];
      button.addEventListener('click', addToCart);
   }

   function addToCart(ev) {
      let productName = ev.currentTarget.parentNode.parentNode.getElementsByClassName('product-details')[0].getElementsByClassName('product-title')[0].textContent;
      let money = Number(ev.currentTarget.parentNode.parentNode.getElementsByClassName('product-line-price')[0].textContent);
      let fixedMoney = money.toFixed(2)
      textArea.textContent += `Added ${productName} for ${fixedMoney} to the cart.\n`
      if (!result.hasOwnProperty(productName)) {
         result[productName] = Number(fixedMoney);
      }else{
         result[productName] += Number(fixedMoney);
      }
   }

   function checkOut(ev) {

      let midFoodName = [];
      let totalPrice = 0;
      let resultArr = (Object.entries(result));
      for (let row of resultArr) {
         midFoodName.push(row[0]);
         totalPrice += row[1];
      }
      textArea.textContent += `You bought ${midFoodName.join(', ')} for ${totalPrice.toFixed(2)}.`
      checkOutButton.disabled = true;

      for (row of cart) {
         let button = row.getElementsByClassName('product-add')[0].getElementsByClassName('add-product')[0];
         button.disabled = true;
      }
   }
}