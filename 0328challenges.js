//For to While
//Re-write the following as a while loop:
var i=0
while (i<10){
  console.log(i)
  i++;
}


//..and Back
//Re-write the following as a for loop:
for (var a=10; a>0; a--) {console.log(a)}

var mergeArray = [1, 2, 3]
var set2 = [2, 30, 1]
var merged = mergeArray.concat(set2);


//Duplicate Array
//Write a Javascript function mergeArray that merges two arrays and removes all duplicate elements.

var uniqueArray = function(mergeArray) {
  return mergeArray.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos;
  });
};

var uniqEs6 = (mergeArray) => {
  return mergeArray.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
}

var test = [1,2,3];
var testBis = [2,30,1];
console.log(uniqueArray(test.concat(testBis)));


//Pre-fill
//Write a Javascript function called fillArray to create a specified number of elements with a pre-filled numeric values in an array.
function fillArray(x, y) {
  var newArray = []
  for(var i = 0; i < x; i++){
    newArray.push(y)
  }
  return newArray
}
fillArray(6, 0)


//Clean Function
//Write a Javascript function to filter false, null, 0 and blank values from an array.

var filterArrayValues = [58, '', 'abcd', true, null, false, 0];
var filtering = filterArrayValues.filter(function (stillFiltering) {
  if (stillFiltering == null){

  }
    else if (stillFiltering == ''){

    }
    else (stillFiltering == 0){

    }
//  return stillFiltering == 'abcd';
});
console.log(filtering);


var filterArrayValues = []
function filterme.


filterArrayValues = ([58, '', 'abcd', true, null, false, 0])
