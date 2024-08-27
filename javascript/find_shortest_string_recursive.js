function findShortestStringRecursive(arr) {
  // type your code here
  if (arr.length === 1)
    return arr[0];

  return (arr[0].length <= arr[1].length ? 
    findShortestStringRecursive([arr[0], ...arr.slice(2)]) : 
    findShortestStringRecursive(arr.slice(1))
  );
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

  console.log("");
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['a']));

  console.log("");
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['a', 'aa']));

  console.log("");
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aa', 'a']));  
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
