function convertToRoman(num) {
    // Create an array for each of roman and arabic
    let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    // Create empty string for solution
    let solution = ""

    // Iterate through all the arabic numerals
    for (let i = 0; i < arabic.length; i++) {
        // While the arabic numeral in the current iteration is less than or equal the input number
        while (arabic[i] <= num) {
            // We append the equivalent roman numeral to the solution string and deduct the number we just added from the input number for the next iteration
            solution = solution + roman[i];
            num = num - arabic[i];
        }
    }
    return solution;
}

convertToRoman(36);