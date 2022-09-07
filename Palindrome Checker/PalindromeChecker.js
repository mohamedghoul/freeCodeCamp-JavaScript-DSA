function palindrome(str) {
    // Convert input string to lowercase and remove any non-alphanumeric characters
    let alphanumericLowercase = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare reversed string with input string and return result
    if (alphanumericLowercase === alphanumericLowercase.split('').reverse().join('')) {
        return true;
    }
    else return false;
}

palindrome("eye");