function orbit(arr){

    let mat = [];
    let rowLength = arr[0];
    let colLength = arr[1];
    let startRow = arr[2];
    let startCol = arr[3];

    for(let i = 0; i < rowLength; i++){
        mat.push([])
    }

    for(let row = 0; row < rowLength; row++){
        for(let col = 0; col < colLength; col++){
            mat[row][col] = Math.max(Math.abs(row - startRow), Math.abs(col - startCol)) + 1;
        }
    }
    for(el of mat){
        console.log(...el)
    }
}

orbit([4, 4, 0, 0])
orbit([3, 3, 2, 2])