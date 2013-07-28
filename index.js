'use strict';

var go = module.exports = function (arr1, arr2) {

  if (!arr1 || !arr2) throw new Error('Need two arrays to merge');
  if (!Array.isArray(arr1)) throw new Error('First argument is not an array, but a ' + typeof arr1);
  if (!Array.isArray(arr2)) throw new Error('Second argument is not an array, but a ' + typeof arr2);

  function hashify(acc, k) {
    acc[k] = true;
    return acc;
  }

  var arr1Hash = arr1.reduce(hashify, {});
  var mergedHash = arr2.reduce(hashify, arr1Hash);

  return Object.keys(mergedHash);
};
