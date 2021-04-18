'use strict';
/*1. Написать функцию, которая проверяет, являются ли два слова анаграммами. 
(Анаграммы - слова, которые имеют одинаковую длину и состоят из одних и тех же букв, но в разном порядке. Пример: "воз", "зов")
Регистр букв не имеет значения. */

function isAnagrams(word1, word2) {
  if (typeof word1 !== 'string' || typeof word2 !== 'string') throw new TypeError('Words must be a string type');
  const trimmedWord1 = word1.trim();
  const trimmedWord2 = word2.trim();
  if (!trimmedWord1.length || !trimmedWord2.length) throw new RangeError(`${trimmedWord1.length ? 'second word empty' : 'first word empty'}`);
  if (trimmedWord1.length !== trimmedWord2.length) return false;
  let result = trimmedWord1.toLowerCase().split("");
  trimmedWord2.toLowerCase().split("").forEach(elem => result.indexOf(elem) >= 0 ? result.splice(result.indexOf(elem), 1) : null);
  return !result.length;
}

// console.log(isAnagrams("   test ", " tetsfewf "));

//2. Написать функцию, которая подсчитывает количество гласных в строке.

const vowelsLetters = ['a', 'e', 'i', 'o', 'u']
function countVowels(string, array) {
  if (typeof string !== 'string') throw new TypeError('Words must be a string type');
  return string.trim().toLowerCase().split("").reduce((acc, letter) => { return array.includes(letter) ? acc + 1 : acc }, 0);
}

// console.log(countVowels("wqdioydfa", vowelsLetters), 'count');

/*3. Написать функцию, которая принимает массив с числами и возвращает новый массив,
 который содержит отрицательные числа из первого массива.*/

 function getNegativeValues(){
   
 }