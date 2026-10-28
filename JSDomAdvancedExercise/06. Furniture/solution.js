

function solve() {
  let inputData = document.getElementsByTagName('textarea')[0];
  let outputData = document.getElementsByTagName('textarea')[1];
  let buttons = document.getElementsByTagName('button');

  let generatebutton = Array.from(buttons)[0];
  let buyButton = Array.from(buttons)[1];
  generatebutton.addEventListener('click', createRow);
  buyButton.addEventListener('click', showOutPut);
  

  function createRow(ev){
    for(let el of JSON.parse(inputData.value)){
        let furnitureName = el.name;
        let imgData = el.img;
        let furniturePrice = Number(el.price);
        let furnitureDecFactor = Number(el.decFactor)
      
        let tr = document.createElement('tr'); //here have to upend when all td re ready!!!

        let tdImg = createTd();
        let img = createImg();
        img.src = imgData;
        tdImg.appendChild(img);
        tr.appendChild(tdImg);

        let tdName = createTd();
        let pName = createP();
        pName.textContent = furnitureName;
        tdName.appendChild(pName);

        let tdPrice = createTd();
        let pPrice = createP();
        pPrice.textContent = furniturePrice;
        tdPrice.appendChild(pPrice);

        let tdDecFac = createTd();
        let pDecFAc = createP();
        pDecFAc.textContent = furnitureDecFactor;
        tdDecFac.appendChild(pDecFAc);

        let tdCheck = createTd();
        let input = document.createElement('input');
        input.type = 'checkbox';

        tdCheck.appendChild(input);

        tr.appendChild(tdImg);
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdDecFac);
        tr.appendChild(tdCheck);

        document.getElementsByTagName('tbody')[0].appendChild(tr);
        
      function createTd(){
          return document.createElement('td');
      }
      function createImg(){
        return document.createElement('img');
      }
      function createP(){
        return document.createElement('p');
      }
    }
  }

  function showOutPut(ev){
    let counter = 0;
    let rows = document.querySelectorAll('tbody tr');
    let totalPrice = 0;
    let avgFactor = 0;
    let arrNames = [];
    
    for(let row of rows){
      
      let midleResult = '';
      
      
      let checkBoxRef = row.lastElementChild;
      let checkBox = checkBoxRef.querySelector('input');
      if(checkBox.checked){
        counter ++;
        let name = row.children[1];
        arrNames.push(name.textContent);
        midleResult += `Bought furniture: ${arrNames.join(', ')}\n`


        let price = row.children[2];
        totalPrice += Number(price.textContent);
        midleResult += `Total price: ${totalPrice.toFixed(2)}\n`;

        let avgDecFac = Number(row.children[3].textContent);
        avgFactor += avgDecFac;
        midleResult += `Average decoration factor: ${(avgFactor / counter).toFixed(2)}`
        outputData.value = midleResult;
      }
    }
  }
}