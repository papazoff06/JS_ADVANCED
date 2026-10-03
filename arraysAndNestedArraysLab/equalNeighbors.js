function equalNeighbors(matrix) {
    let found = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let z = 0; z < matrix[i].length; z++) {
            if (z + 1 < matrix[i].length && matrix[i][z] === matrix[i][z + 1]) {
                found += 1;
            }
            if (i + 1 < matrix.length && matrix[i][z] === matrix[i + 1][z]) {
                found += 1;
            }
        }
    }
    console.log(found);
}


equalNeighbors([
 ['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']]
)

equalNeighbors([
 ['test', 'yes', 'yo', 'ho'],
 ['well', 'done', 'yo', '6'],
 ['not', 'done', 'yet', '5']]
)