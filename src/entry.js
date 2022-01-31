export default function Entry(title, text) {
  this.title = title;
  this.text = text;
}

Entry.prototype.wordCounter = function() {
  let wordCount = 0;
  let wordArray = this.text.split(" ");
  wordArray.forEach(function(word) {
    word = word.trim();
    if (!Number(word) && word.length != 0) {
      wordCount++;
    }
  });
  return wordCount;
};

Entry.prototype.vowelCounter = function() {
  let vowelCount = 0;
  let vowelArray = this.text.split("");
  vowelArray.forEach(function(letter) {
    letter = letter.toUpperCase();
    if (letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U' || letter === 'Y') {
      vowelCount++;
    }
  });
  return vowelCount;
};

Entry.prototype.consonantCounter = function() {
  let consonantCount = 0;
  let consonantArray = this.text.split("");
  consonantArray.forEach(function(letter) {
    letter = letter.toUpperCase();
    letter = letter.trim();
    if ((letter.toLowerCase() != letter) && letter.length != 0 && letter != 'A' && letter != 'E' && letter != 'I' && letter != 'O' && letter != 'U' && letter != 'Y') {
      consonantCount++;
    }
  });
  return consonantCount;
};

Entry.prototype.getTeaser = function() {
  let teaser = [];
  let teaserArray = this.text.split(" ");
  for (let i = 0; i <= 7; i++) {
    teaser.push(teaserArray[i]);
  }
  return teaser.join(" ");
};