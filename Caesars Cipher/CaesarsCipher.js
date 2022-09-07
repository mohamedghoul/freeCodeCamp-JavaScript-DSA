function rot13(str) {
    // Create a string containing all the uppercase letters of the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Break down the input string into separate characters and map them through the following
    return str.split('').map(character => {
        // Find the index of the character you're currently iterating through (index does not exist if the character is a space)
        let index = alphabet.indexOf(character);
        // If the index corresponds to a letter
        if (index >= 0) {
            // Calculate the new index with the rotation
            let newIndex = (index + 13) % 26
            // Return the letter with the new index
            return alphabet[newIndex]
        }
        // If the character is not a letter (a space for example), it will be passed on without modifications
        else return character
        // Join the characters back up to form the rotated string
    }).join('');
}

console.log(rot13("SERR PBQR PNZC"))