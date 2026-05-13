function consecutiveSubstrings(string) {
  const substringArray = []; // array to add the substrings
  
  for (let i = 0; i < string.length; i++) {
    // Declare a temporary variable to assign 
    // the characters of the string to
    let temp = "" 
    for (let j = i; j < string.length; j++) {
      // add the current character to the temp 
      // variable and push it to the array
      temp = temp + string[j] 
      substringArray.push(temp)
    }
  }
  return substringArray;
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


