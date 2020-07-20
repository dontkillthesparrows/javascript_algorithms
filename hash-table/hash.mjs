export function ASCIIhash(key, bucketsNumber) {
  let hashCode = 0;
  for (let charIndex = 0; charIndex < key.length; charIndex++) {
    hashCode += key.charCodeAt(charIndex);
  }

  return hashCode % bucketsNumber;
}
