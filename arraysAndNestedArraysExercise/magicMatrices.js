function magicMatrices(arr){
    let isMagic = true;
    for (let i = 0; i < arr.length - 1; i++){
        let row1 = 0;
        let row2 = 0;
        let col1 = 0;
        let col2 = 0;

        arr[i].forEach((el) => row1 += el);
        arr[i + 1].forEach((el) => row2 += el);
        arr.forEach((row) => col1 += row[i]);
        arr.forEach((row) => col2 += row[i + 1]);
        
       if (row1 !== row2 || col1 !== col2){
        isMagic = false;
        break;
       }
    }
    console.log(isMagic)
}

magicMatrices([[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]
)
magicMatrices([
 [11, 32, 45],
 [21, 0, 1],
 [21, 1, 1]]
)

magicMatrices([[1, 0, 0],
 [0, 0, 1],
 [0, 1, 0]]
)