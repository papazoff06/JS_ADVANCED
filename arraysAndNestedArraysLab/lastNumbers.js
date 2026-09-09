function solve(n, k) {
    // Създаваме масив с първи елемент 1 по алтернативен начин
    let sequence = Array.of(1);

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let previousElements = sequence.slice(start, i);
        let currentSum = previousElements.reduce((acc, curr) => acc + curr, 0);
        
        sequence.push(currentSum);
    }

    return sequence;
}

console.log(solve(6, 3));
console.log(solve(8, 2));
