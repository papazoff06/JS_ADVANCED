function search() {
   let searchWord = document.getElementById("searchText").value;
   let towns = document.getElementById('towns');
   let result = []
   for(let town of towns.children){
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
      if(searchWord !== ''){
         if(town.textContent.includes(searchWord)){
         result.push(town.textContent);
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
      }
      }
   }
   document.getElementById('result').textContent = `${result.length} matches found`;
   document.getElementById("searchText").value = '';
}