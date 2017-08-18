
//business logic

//**splitSentene function converts letters to lowercase, splits sentence into words and passes words into pigLatinRules function//

function splitSentence(sentence) {
  lowercase = sentence.toLowerCase();
  var wordsArray = lowercase.split(' ');
  wordsArray = wordsArray.map(function(word) {
    return pigLatinRules(word);
  });
  alert(wordsArray.join(' '))
}

function pigLatinRules(word) {
  if (isConsonant(word.charAt('0')) && word.charAt(1) === 'q' && word.charAt(2) === 'u') {
    word = consquRule(word);
    return word;
  } else if (word.charAt(0) === 'q' && word.charAt(1) === 'u') {
    word = quRule(word);
    return word;
  } else if (word.charAt(0) === 'y') {
    word = yRule(word);
    return word;
  } else if (isVowel(word.charAt(0))) {
    word = vowelRule(word);
    return word;
  } else if (isConsonant(word.charAt(0))){
    word = consRule(word);
    return word;
  } else {
    return word;
  }
}
function consquRule(word) {
  var characters = word.split('');
  var firstChar = characters.shift();
  characters.push(firstChar);
  return quRule(characters.join(''));
}
function quRule(word) {
  var characters = word.split('');
  characters.splice(0, 2);
  return characters.concat('quay').join('');
}
function yRule(word) {
  var characters = word.split('');
  characters.splice(0, 1);
  return characters.concat('yay').join('');
}
function isVowel(firstLetter) {
  return isLetter(firstLetter) && /[aeiou]/.test(firstLetter);
}

function isLetter(firstLetter) {
  return /[a-z]/.test(firstLetter);
}
function vowelRule(word) {
  word = word + 'way';
  return word;
}
function isConsonant(firstLetter) {
  return isLetter(firstLetter) && !/[aeiou]/.test(firstLetter);
}
function consRule(word) {
  var characters = word.split('');
  var flag = true;

  characters.forEach(function(charater) {
    if (isConsonant(charater) && flag) {
      var firstChar = characters.shift();
      characters.push(firstChar);
    } else {
      flag = false;
    }
  });

  characters.push('ay');
  return characters.join('');
}



//front-end user interface logic
$(document).ready(function() {
  $('#pigLatin').submit(function(event) {
    event.preventDefault();
    var userInput = $('#userInput').val();
    splitSentence(userInput);
  });
});
