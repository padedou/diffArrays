# diffArrays
Get an array that contains only the unique elements of a set of input arrays (the differences).

## Example 1:
```javascript
var arr1 = [0, 1, 2, 3, 4, 5];
var arr2 = [0, 1, 2, 3, 6, 7];
console.log(diffArrays([arr1, arr2]));
```
prints out: [ 4, 5, 6, 7 ]

## Example 2:
``` javascript
var arr1 = [0, 1, Math.abs];
var arr2 = [2, 'hello', console.log];
var arr3 = ['hello', 'world', Math.abs];
console.log(diffArrays([arr1, arr2, arr3]));
```
prints out: [ 0, 1, 2, [Function: bound ], 'world' ]
