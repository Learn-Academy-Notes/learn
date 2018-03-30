/* Reverse the letters in a sentence
*/

var sentence = "To be or not to be"

// Function takes in a sentence and returns the sentence reversed.
function reverseString( sentence ) {

    // separate sentence into words
    var reversed = sentence.split(" ")
    console.log("Sentence split into words: " + reversed

    // separate each word into individual letters
    var i = 0
    while( i < reversed.length) {
      // iterate over each word in the reversed order

      // reverse the letters of each words

      }
    }

    // reverse the order of words

    // return the reversed sentence
}

reverseString(sentence)
//TODO: Add functionality to only reverse words of five or more letters




/***********************************************************************/
// WORKED!!!
var sen = "Once upon a time."

function reverse( string ) {
  var reversed = ""
  for (var i = string.length-1 ; i >= 0 ; i--){
    reversed = reversed.concat(string[i])
  }
  return reversed
}

reverse(sen)

/***********************************************************************/
// WORKED!!!
var sen = "Once upon a time"

function reverseString( str ) {
  var reversed = str.split("").reverse().join("")
  return reversed
}

reverseString(sen)
