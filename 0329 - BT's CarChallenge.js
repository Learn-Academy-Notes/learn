// CAR OBJECT CHALLENGE

/* STORY 1
function createCar( make, model, year, color ){
  return {
    make: make,
    model: model,
    year: year,
    color: color,
    getData: function() {
      return this.make + " - " + this.model + " - "  + this.year + " - "  + this.color
    },
    getId: function() {
      return
    }
  }
}

var car1 = createCar( "Ford", "F150", "2005", "blue", "100mph")
*/

// STORY 2
function createCar ( make, model, year, color) {
  var make = make
  var model = model
  var year = year
  var color = color
  var speed = 0
  var maxSpeed = 85
  return {
    getData: function (){
      return make + " - " + model + " - " + year + " - " + color
    },
    getSpeed: function (){
      return speed
    },
    accelerate: function (){
//STORY 4 MAKING A IF LOOP TO ACCELERATE TO 80 IF CAR HITS 80 AND WE ACCELERATE AGAIN ADD 5
      if (speed < 80){
        speed = speed + 10
        return speed
      }
      if (speed == 80){
        speed = speed + 5
        return speed
      }
    },
    brake: function (){
      speed = speed - 7
      if( speed < 0){
        speed = 0;
      }
      return speed
    },
    // Reduces the speed of the car at a random amount between 1 and half of the speed
    slipperyBrake: function(){
      speed -= Math.ceil(Math.random() * .5 * speed)
      return speed
    },
    getMaxSpeed: function (){
      return maxSpeed
    }
  }
}
var car1 = createCar( "Ford", "F150", "2005", "blue")


// STORY 3
// Create a new car
var car2 = createCar( "Toyota", "Camry", "2017", "white")
// Check to make sure we're starting at speed 0
var currentSpeed = car2.getSpeed()
console.log("speed before accelerating: " + currentSpeed)
// Accelerate to 70
while ( currentSpeed < 70 ){
  car2.accelerate()
  currentSpeed = car2.getSpeed()
}
console.log("speed after we accelerated to 70: " + currentSpeed)
// Decelerate to 0
while ( currentSpeed > 0 ){
  car2.brake()
  currentSpeed = car2.getSpeed()
}
console.log("speed after we decelerated to 0: " + currentSpeed)


/***********************************************************/
