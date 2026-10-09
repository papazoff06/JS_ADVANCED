function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let students = document.getElementsByTagName('tr');
      let searchWord = document.getElementById('searchField').value;
      for (let i = 1; i < students.length; i++) {

         students[i].classList.remove('select');
      }

      if (searchWord !== '') {
         for (let i = 2; i < students.length; i++) {
            for (let b = 0; b < students[i].children.length; b++) {
               let word = students[i].children[b];
               if (word.textContent.includes(searchWord)) {
                  word.parentElement.classList.add('select');
               }
            }
         }
      }
      document.getElementById('searchField').value = '';
   }
}