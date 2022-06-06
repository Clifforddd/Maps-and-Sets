//Quick Question #1
new Set([1,1,2,2,3,4])
{1,2,3,4} //return

//Quick Question #2
[...new Set("referee")].join("")
'ref' //return

//Quick Questions #3
//What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

Map(2) {Array(3) => true, Array(3) => false}
0: {Array(3) => true}
1: {Array(3) => false}

//hasDuplicate
//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = (num) => {
  return new Set(num).size !== num.length
};

//vowelCount
//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(e){
  const newVowes = new Map();
  let vowelCheck = "aeiou";
  
  for(let char of e){
    let lowerCase = char.toLowerCase()
    
    if(vowelCheck.includes(lowerCase)){
      if(newVowes.has(lowerCase)){
        newVowes.set(lowerCase, newVowes.get(lowerCase) + 1);
      } 
     else {
        newVowes.set(lowerCase, 1);
      }
    }
  }
  return newVowes;
}


vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
