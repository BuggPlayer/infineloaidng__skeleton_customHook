////bubble sort and 2nd hieght element in array

function bbsrt(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(bbsrt([234, 43, 55, 63, 5, 6, 235, 547]));
let sortedArr = bbsrt([234, 43, 55, 63, 5, 6, 235, 547]);
// console.log(sortedArr[sortedArr.length - 2]);

// ************* reverse str *****************
// function reverseString(str) {
//   // console.log(str);
//   let reverseStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i];
//   }
//   return reverseStr;
// }
// console.log(reverseString("faizan"));

// ************* logest prefix in Arr *****************
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// fl
// str null str length 0
// smalles math.min()
//char minl //for
//
function LongestPrefix(arr) {
  let longPrefix = "";
  if (arr == null || arr.length == 0) {
    return longPrefix;
  }
  let minLength = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    minLength = Math.min(minLength, arr[i].length);
  }
  for (let k = 0; k < minLength; k++) {
    let current = arr[0][k];
    for (let index = 0; index < arr.length; index++) {
      if (arr[index][k] !== current) {
        return longPrefix;
      }
    }
    longPrefix = longPrefix + current;
  }
  return longPrefix;
}
console.log(LongestPrefix(["flower", "flow", "flight"]));
