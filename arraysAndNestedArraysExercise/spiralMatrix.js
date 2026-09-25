function spiralMatrix(rowLength, colLength){
    let mat = [];
    for(let i = 0; i < rowLength; i++){
        mat.push([])
    }

    // Дефинираме четирите граници на матрицата
    let top = 0;
    let bottom = rowLength - 1;
    let left = 0;
    let right = colLength - 1;

    let counter = 1; // Числото, което ще записваме

    // Въртим цикъла, докато стените не се срещнат
    while (top <= bottom && left <= right) {
        
        // 1. Движение НАДЯСНО (по най-горния свободен ред)
        for (let col = left; col <= right; col++) {
            mat[top][col] = counter++;
        }
        top++; // Свиваме горната граница надолу

        // 2. Движение НАДОЛУ (по най-дясната свободна колона)
        for (let row = top; row <= bottom; row++) {
            mat[row][right] = counter++;
        }
        right--; // Свиваме дясната граница наляво

        // 3. Движение НАЛЯВО (по най-долния свободен ред)
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                mat[bottom][col] = counter++;
            }
            bottom--; // Свиваме долната граница нагоре
        }

        // 4. Движение НАГОРЕ (по най-лявата свободна колона)
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                mat[row][left] = counter++;
            }
            left++; // Свиваме лявата граница надясно
        }
    }

    // Отпечатваме всеки ред на нов ред, разделен с интервал (както е по условие)
    for(let el of mat){
        console.log(...el)
    }
}

spiralMatrix(5, 5);
console.log('---');
spiralMatrix(3, 3);
