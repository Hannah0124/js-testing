// https://github.com/Hannah0124/js-testing

const isPalindrome = function(text) {  // "Too hot to hoot"
  // text = text.toLowerCase().split(" ").join(""); // how to delete whitespaces in a string

  text = lettersOnlyText(text.toLowerCase());  

  let i = 0 ;
  let j = text.length - 1 

  while (i < j) {
    if (text[i] !== text[j]) {  // same as (text.chartAt(i) !== text.chartAt(j))
      return false;
    }

    i += 1; 
    j -= 1;
  }; 

  return true; 
};

const lettersOnlyText = (text) => {
  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  return text.replace(/[^a-z^0-9]/g, '')  // gi means => g "gloabl", i "ignore case" (Case insensitive)
}

module.exports = isPalindrome;
