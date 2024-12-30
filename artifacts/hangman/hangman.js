class HangmanManager {
  constructor(length, lives) {
    if (isNaN(length) || length < 1) {
      throw new Error(`Invalid word length: ${length}`);
    }
    if (isNaN(lives) || lives < 0) {
      throw new Error(`Invalid max wrong guesses: ${lives}`);
    }

    this.words = []; // Initially empty, will be populated once the dictionary is loaded
    this.lives = lives;
    this.guesses = new Set();
    this.currentPattern = "-".repeat(length).split("").join(" ");
    this.wordLength = length;
    
    // Load dictionary and filter words by length
    this.words = null;
    this.loadDictionary().then(dictionary => {
      this.words = dictionary.filter(word => word.length === length);
    }).catch(error => {
      console.error('Error loading dictionary:', error);
    });
  }

  // Fetch the dictionary from the external file
  async loadDictionary() {
    try {
      const response = await fetch(`/portfolio/artifacts/hangman/dictionary.txt`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      const data_split = data.split('\n').map(word => word.trim());
      console.log(data_split[0]);
      return data_split
    } catch (error) {
      console.error('There was an error fetching the dictionary:', error);
      return [];  // Return an empty array in case of error
    }
  }

  getWords() {
    return this.words;
  }

  getGuessesLeft() {
    return this.lives;
  }

  getGuesses() {
    return Array.from(this.guesses);
  }

  getPattern() {
    if (this.words == null) {
      console.log("No dictionary loaded (possibly yet)");
    } else if (this.words.length === 0) {
      throw new Error("No words in dictionary of correct length");
    }
    return this.currentPattern;
  }

  makePattern(word, guess) {
    let pattern = "";
    for (let i = 0; i < word.length; i++) {
      if (this.currentPattern[i * 2] === "-" && word[i] === guess) {
        pattern += guess + " ";
      } else {
        pattern += this.currentPattern[i * 2] + " ";
      }
    }
    return pattern.trim();
  }

  record(guess) {
    if (this.words.length === 0) {
      throw new Error("No words in dictionary of correct length");
    }
    if (this.guesses.has(guess)) {
      throw new Error(`Repeated guess: ${guess}`);
    }
    if (this.lives < 1) {
      throw new Error("No guesses left");
    }

    this.guesses.add(guess);

    const patterns = this.wordsToPatterns(guess);
    this.setBestPattern(patterns);

    const count = [...this.currentPattern].filter(ch => ch === guess).length;
    if (count === 0) {
      this.lives--;
    }
    return count;
  }

  wordsToPatterns(guess) {
    const patterns = {};
    for (const word of this.words) {
      const pattern = this.makePattern(word, guess);
      if (!patterns[pattern]) {
        patterns[pattern] = [];
      }
      patterns[pattern].push(word);
    }
    return patterns;
  }

  setBestPattern(patterns) {
    let maxWords = 0;
    for (const pattern in patterns) {
      const wordCount = patterns[pattern].length;
      if (wordCount > maxWords) {
        this.currentPattern = pattern;
        maxWords = wordCount;
      }
    }
    this.words = patterns[this.currentPattern];
  }
}
