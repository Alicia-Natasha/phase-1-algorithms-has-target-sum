function hasTargetSum(array, target) {
  // Create an empty object to store the numbers we've seen so far
  const seenNumbers = {};

  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];

    // Calculate the complement of the current number
    const complement = target - currentNumber;

    // Check if the complement is in the seenNumbers object
    if (seenNumbers[complement] !== undefined) {
      // If the complement is found, return true
      return true;
    }

    // Add the current number to the seenNumbers object
    seenNumbers[currentNumber] = true;
  }

  // If no pair of numbers adds up to the target, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
