// letterFinder.js

console.log("===== VERSION DE BASE =====");

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

// Test 1
console.log("\nTest 1: letterFinder('test', 't')");
letterFinder("test", "t");

// Test 2
console.log("\nTest 2: letterFinder('banana', 'a')");
letterFinder("banana", "a");

// Test 3
console.log("\nTest 3: letterFinder('hello', 'z')");
letterFinder("hello", "z");



console.log("\n===== VERSION AMÉLIORÉE (Validation + ===) =====");

function letterFinderSecure(word, match) {
  if (typeof word !== "string") {
    console.log("Erreur: word doit être une chaîne de caractères.");
    return;
  }

  if (typeof match !== "string" || match.length !== 1) {
    console.log("Erreur: match doit être une seule lettre.");
    return;
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

// Test version sécurisée
console.log("\nTest version sécurisée:");
letterFinderSecure("test", "t");



console.log("\n===== VERSION IGNORE CASE =====");

function letterFinderIgnoreCase(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    console.log("Paramètres invalides.");
    return;
  }

  const w = word.toLowerCase();
  const m = match.toLowerCase();

  for (let i = 0; i < w.length; i++) {
    if (w[i] === m) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

// Test ignore case
console.log("\nTest ignore case:");
letterFinderIgnoreCase("Test", "t");



console.log("\n===== BONUS : COMPTER LES OCCURRENCES =====");

function countLetter(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      count++;
    }
  }

  return count;
}

console.log("Nombre de 'a' dans banana :", countLetter("banana", "a"));