# freeCodeCamp-JavaScript-DSA
This repository contains my answers to the certification projects for freeCodeCamp's JavaScript Algorithms and Data Structures certification.

## 1. Palindrome Checker
In this project, I used my knowledge of array functions and regular expressions to check if an input string is spelled the same backwards. In order to achieve this, I converted the string to lowercase form using built-in functions and removed any non-alphanumeric characters using the array replace function and regular expressions. Then, I proceeded to compare this newly formatted string with its reversed version and return the result.

For more details, feel free to check my commented code in the Palindrome Checker directory

## 2. Roman Numeral Converter
In this project, I took an input number in Arabic format and converted it into a Roman numeral. I started by creating two arrays, one containing Arabic numerals and another containing Roman numerals. Then, I created a for loop to iterate through all the Arabic numerals. For each Arabic numeral, I checked if the numeral is less than or equal to the input number and appended the equivalent roman numeral to the solution if that was the case. Then, I deducted the value of the arabic numeral whose Roman equivalent was just appended to the solution from the input number for future iterations. Once the loop has finished executing, the solution is returned to the user.

For more details, feel free to check my commented code in the Roman Numeral Converter directory

## 3. Caesars Cipher
In this project, I created a function to rotate letters in a string 13 times. I achieved this by creating a string containing every letter of the alphabet. Then, I split the input string into an array and used the indexOf function to find the index of each character in the alphabet string. After finding the index of each character, I incremented them by 13 (with modulus 26 to make it circular). Leaving spaces and non-alphabetic characters unmodified, I fetched the letters pertaining to the new, rotated indices from the alphabet string and concatenated them to produce the output.

For more details, feel free to check my commented code in the Caesars Cipher directory

## 4. Telephone Number Validator
This project has greatly helped me improve my regular expression skills, an area which I was not very strong in. I created a pattern for many different kinds of valid phone numbers and tested an input string with that pattern to return a boolean result.

For more details, feel free to check my commented code in the Telephone Number Validator directory

## 5. Cash Register
This project was possibly the most challenging one out of all the projects in the certification. The goal was to calculate the amount of change to give a customer, taking into consideration the price of the product, the cash received by the cashier and the amount of cash in the drawer. I started by calculating the total cash in drawer using a basic helper function and the change that should be given to the customer (cash received - price). Then I compared both of these calculated values. If the total cash in drawer was less than the change due, INSUFFICIENT_FUNDS will be returned in an object along with an empty change property. If the total cash in drawer was equal to the change due, CLOSED was returned in an object with the change property being the cash in drawer. If the total cash in drawer was greater than the change due, the change that will be given to the customer was calculated using a helper function and OPEN was returned in an object with the change property being the change that was just calculated.

For more details, feel free to check my commented code in the Cash Register directory
