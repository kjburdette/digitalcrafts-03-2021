// const isAnagram = (string1, string2) => {
// 	return
// }
// // Pure letter strings
// console.log(isAnagram("hello", "ollh")); // true
// console.log(isAnagram("listen", "lidfje")); // false
// console.log(isAnagram("Listen", "silent")); // true
// // String phrases with spaces (Needs to ignore spaces)
// console.log(isAnagram("dorMITORY", "dirty room")); // true
// // String phrases with punctuation (Needs to ignore punctuation).
// console.log(isAnagram("convers a t i o n", "voices!RANT!ON  !")); // true
// console.log(isAnagram("dkj fsdjfh", "this doesn't work"); // false


const isAnagram = (string1, string2) => {
    var newstring1 = string1.toLowerCase().split('').sort().join();
    console.log(newstring1)
    var newstring2 = string2.toLowerCase().split('').sort().join();
    console.log(newstring2)
    if(newstring1 === newstring2){
      return true;
    }
    else{
      return false;
    }
}

console.log(isAnagram("listen", "silent"))
// isAnagram("hello","racecar")
console.log(isAnagram("dorMITORY", "dirty room"))