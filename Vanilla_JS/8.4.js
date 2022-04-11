const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function func(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    for (let j = 0; j < word.length; j++) {
      let letter = word[j].toLowerCase();

      if (letter == "" || letter == " ") {
        continue;
      }
      if (obj[letter] == undefined) {
        obj[letter] = 0;
      }

      obj[letter]++;
    }
  }

  return obj;
}

const x = func(array);

console.log(x);
