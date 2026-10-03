function diagonalSum(matrix){
    let leftSum = 0;
    let rightSum = 0;
    let res = matrix.length -1;

    for(let i = 0; i < matrix.length; i++){
        leftSum += matrix[i][i];
        rightSum += matrix[i][res];
        res -= 1;
    }
    console.log(leftSum, rightSum)

}

diagonalSum([[20, 40],
 [10, 60]]
)

diagonalSum([[3, 5, 17],
 [-1, 7, 14],
 [1, -8, 89]]
)