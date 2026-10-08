function solve() {
  let input = document.getElementById('text').value;
  let type = document.getElementById('naming-convention').value;
  let pascalResult = '';
  let camelResult = '';
  let words = input.split(' ');
  let lowerWords = words.map(word => word.toLowerCase());

  if (type !== "Camel Case" && type !== "Pascal Case") {
    document.getElementById('result').textContent = "Error!"
  } else {
    for (let word of lowerWords) {
      pascalResult += word.charAt(0).toUpperCase() + word.slice(1);
    }
    if (type === "Pascal Case") {
      document.getElementById('result').textContent = pascalResult;
    }
    else {
      camelResult = pascalResult.charAt(0).toLowerCase() + pascalResult.slice(1);
      document.getElementById('result').textContent = camelResult;
    }
  }

}