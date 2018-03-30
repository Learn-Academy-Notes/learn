function greaterNum (num1, num2){
    if (num1 > num2) {
      return num1
    } else {
      return num2
    }
}

// Translates "hello world" into another language
function helloWorld (language) {
  if (language == "fr" || language == "Fr"){
      return "Bonjour le monde"
  }
  if (language == "sp" || language == "Sp") {
      return "Hola Mundo"
  }
  if (language == "jp" ||language == "Jp") {
      return "こんにちは世界"
  }
}

function assignGrade (numberGrade) {
  if (numberGrade >= 90) {
    return "A"
  }
  if (numberGrade < 90 && numberGrade >= 80) {
    return "B"
  }
  if (numberGrade < 80 && numberGrade >= 70) {
    return "C"
  }
  if (numberGrade <70 && numberGrade >= 60 ) {
    return "D"
  }
  if (numberGrade <60) {
    return "F"
  }
}


function pluralize (noun, number) {
  if (number >1) {
    return number + " " + noun + "s"
  }
}


// function oddEven (number){
//   for (var i = 0; i <= number; i++) {
    // if (i % 2 == 0) {
    //   return i+ " is even"
    // }
    // else {
    //   return i+ " is odd"
    // }
//   }
// }
function oddEven (number) {
  var i = 0
  while (i <= number) {
    if (i % 2 == 0) {
      console.log(i+ " is even")
    }
    else {
      console.log(i+ " is odd")
    }
    i++
  }
  return "Done!"
}
