'use strict';
/*1. Написать функцию, которая проверяет, являются ли два слова анаграммами. 
(Анаграммы - слова, которые имеют одинаковую длину и состоят из одних и тех же букв, но в разном порядке. Пример: "воз", "зов")
Регистр букв не имеет значения. */
/**
 * @param {string} word1 
 * @param {string} word2 
 * @returns {boolean}
 */
function isAnagrams(word1, word2) {
  if (word1.trim().toLowerCase().length !== word2.trim().toLowerCase().length || word1.trim().toLowerCase() === word2.trim().toLowerCase()) return false;
  return word1.trim().toLowerCase().split('').sort().join('') === word2.trim().toLowerCase().split('').sort().join('');
}
// console.log(isAnagrams('test', 'test'))
// console.log(isAnagrams("   test ", " tets "));
/******************************************************/
//2. Написать функцию, которая подсчитывает количество гласных в строке.
const vowelsLetters = ['a', 'e', 'i', 'o', 'u'];
/**
 * @param {string} string 
 * @param {array} array 
 * @returns {number}
 */
function countIncludes(string, array) {
  if (typeof string !== 'string' || !array instanceof Array) throw new TypeError('Words must be a string type, array need a Array instance');
  return string.trim().toLowerCase().split("").reduce((acc, letter) => { return array.includes(letter) ? acc + 1 : acc }, 0);
}
// console.log(countIncludes("wq  di oy dfa", vowelsLetters), 'count');
/******************************************************/
/*3. Написать функцию, которая принимает массив с числами и возвращает новый массив,
 который содержит отрицательные числа из первого массива.*/
/**
 * @param {array} array 
 * @returns {array}
 */
function getNegativeValues(array) {
  if (!array instanceof Array) throw new TypeError('Need a Array');
  return array.filter(value => value < 0)
}
console.log(getNegativeValues([3, 0, -7, 44, 1, 23, -4, 11, 31, -12, 48]))
/******************************************************/
/*4. Написать функцию, которая принимает массив и возвращает новый массив,
 состоящий только из уникальных значений первого массива (значения не должны повторяться).*/
/**
 * @param {array} array 
 * @returns {array}
 */
function getUniqueValues(array) {
  if (!array instanceof Array) throw new TypeError('Need a Array');
  const result = [];
  array.forEach(val => { if (!result.includes(val)) { result.push(val) } });
  return result;
}
// console.log(getUniqueValues([4, 5, 2, 3, 4, 21, 32, 1, 1, 2, 1, 2, 4]), 'unique')