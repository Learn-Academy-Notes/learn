// GLOBAL SCOPE VS LOCAL SCOPE

var name = "Tom";


var nameCaller = function(){
  console.log(name);
}
nameCaller();

// nameChanger() doesn't take in an argument, so it will reach out
// and look for the variable name and change it
var nameChanger = function(){
  name = "Jerry";
}
nameChanger();
console.log(name);    // will return "Jerry"


// nonNameChanger() takes in an argument, so it will take in a
// copy of what is passed it and work with that.  In this case,
// the variable 'name' inside the function is different from the
// global variable 'name'.  Hence, it doesn't change our global
// variable 'name'.
function nonNameChanger(name){
  name = "Jerry"
  return name
}
nonNameChanger();   // will return "Jerry"
console.log(name);  // will return "Tom"

/**************************************************************/

// OBJECTS

var person = {
  name: "Alex Keaton",
  phone: 123456789
  getData: function(){
    return this.name + " - " + this.phone
  };
}

person.name     // returns "Alex Keaton"
person.phone    // returns "123456789"
person.getData()  // returns "Alex Keaton - 123456789"



// CONSTRUCTOR / FACTORY (for creating objects)
function createNewPerson( newName, newPhone){
  return {
    name: newName,      // MUST INCLUDE COMMAS
    phone: newPhone,
    getData: function() {
      return this.name + " - " + this.phone;  // WHY MUST WE USE THIS.???
    },
    clearData: function() {
      this.name = ""
      this.phone = ""
      return this.name + " - " + this.phone
    }
  }
}

var person1 = createNewPerson( "Joe", 123);
person1.getData()   // returns "Joe - 123"


// CONSTRUCTOR WILL CREATE PRIVATE VARIABLES SINCE THESE VARIABLES
// ARE NOT BEING RETURNED.  ONLY THE getData() FUNCTION IS RETURNED
function createNewPerson( newName, newPhone){
  var name =  newName   // PRIVATE VARIABLES
  var phone = newPhone  // PRIVATE VARIABLES
  return {
    //name,             // name WILL BE PUBLIC IF IT'S RETURNED
    //phone,            // phone WILL BE PUBLIC IF IT'S RETURNED
    getData: function() {
      return name + " - " + phone
    }
  }
}

var person1 = createNewPerson( "Joe", 123);
person1.getData()   // returns "Joe - 123"


// MORE CONSTRUCTOR PRACTICE
function createSuperhero( name, alias, location ){
  var mode = name   // PRIVATE VARIABLE, CAN SEE ONLY THRU findId()
  return {
    name: name,
    alias: alias,
    location: location,
    findId: function() { console.log(mode)},
    switchId: function(){           // switchId() can access and mutate mode variable
      if( mode == this.name ){
        mode = this.alias
      } else {
        mode = this.name
      }
    }
  }
}

var super1 = createSuperhero( "Bruce Wayne", "Batman", "Gotham")
super1.findId()
super1.switchId()
