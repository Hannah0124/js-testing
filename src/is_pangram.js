// https://prod.liveshare.vsengsaas.visualstudio.com/join?5079B7578CBD5F77E08B1DD5A20BA9BFA8AA
// https://github.com/Hannah0124/js-testing

const isPangram = function(text) {
  alphabet = "abcdefghijklmlopqrstuvwxyz".split('')
  text = text.split('');

  const lettersUsed = {};

  // Create a 'letterUsed' obj.
  alphabet.forEach((letter) => {
    lettersUsed[letter] = false;
  });

  // Mark the used letter as 'true'
  text.forEach((letter) => {
    lettersUsed[letter] = true;
  });


// Check which letter was not used
  for(const letter in lettersUsed) {    
    if (!lettersUsed[letter]) {  
      return false;
    }
  }

  return true;  
};

module.exports = isPangram;