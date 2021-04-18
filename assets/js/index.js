'use strict';
/*1. Написать функцию, которая проверяет, являются ли два слова анаграммами. 
(Анаграммы - слова, которые имеют одинаковую длину и состоят из одних и тех же букв, но в разном порядке. Пример: "воз", "зов")
Регистр букв не имеет значения. */

function isAnagrams(word1, word2) {
  if (typeof word1 !== 'string' || typeof word2 !== 'string') {
    throw new TypeError('Words must be a string type');
  }
  if (!word1.length|| !word2.length) throw new RangeError(`${word1.length?'second word empty':'first word empty'}`);
  if (word1.length !== word2.length) return false;
  

}