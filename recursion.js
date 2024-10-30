/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length <= 1 || nums === undefined) {
    return nums[0]
  } else {
    return nums[0] * product(nums.slice(1))
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str <= 1) {
    return str[0] || ""
  }

  return str[0] + everyOther(str.slice(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  
  if(str[0] == str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1))
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

  if (!arr.length) return -1;
  if (arr[0] === val) return 0;
  return findIndex(arr.slice(1), val) + 1 || -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length <= 1) {
    return str;
  }

  return str[str.length - 1] + revString(str.slice(0, str.length - 1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (!arr.length) return -1;
  let max = arr.length - 1;
  let mid = Math.round(max/2);

  if(arr[0] > val || arr[max] < val) return -1;
  if (arr.length <= 1 && arr[0] != val) return -1;
  if (arr[0] == val) return 0;
  if (arr[max] == val) return max;
  if (arr[mid] == val) return mid;

  if(arr[mid] < val) {
    return  binarySearch(arr.slice(mid)) + mid + 1;
  } else {
    return binarySearch(arr.slice(0 , mid)) + 1;
  }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
