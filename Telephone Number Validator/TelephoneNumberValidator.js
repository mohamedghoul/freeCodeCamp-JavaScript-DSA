function telephoneCheck(str) {
    // Write regex to check for all test caes provided
    const regex = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
    // Check if the input string matches the pattern described in the regex above and return the result
    return regex.test(str);
  }
  
  telephoneCheck("555-555-5555");