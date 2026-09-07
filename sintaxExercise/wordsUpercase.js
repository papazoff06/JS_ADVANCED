function wordsUppercase(input) {
    // Extract all sequences of letters/numbers into an array
    let words = input.match(/[a-zA-Z0-9]+/g);

    // If no words are found, handle it gracefully by printing an empty line
    if (!words) {
        console.log("");
        return;
    }

    // Convert all extracted words to uppercase and join them with ", "
    let result = words.map(word => word.toUpperCase()).join(', ');
    
    console.log(result);
}
wordsUppercase('Hi, how are you');





