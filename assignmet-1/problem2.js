function calculateFrequency(string) {

  let frequency = {};

  for (let i = 0; i < string.length; i++) {
    let ch = string[i];

   
    if (ch >= 'a' && ch <= 'z') {
      if (frequency[ch] === undefined) {
        frequency[ch] = 1;
      } else {
        frequency[ch]++;
      }
    }
  }

  return frequency;
  
}