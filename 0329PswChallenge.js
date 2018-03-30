// PASSWORD CHECKER CHALLENGE

var username = prompt( "Enter a username: ")
var password = prompt( "Enter a password: ")

// newUser CONSTRUCTOR
function newUser( username, password ){
  var username = username
  var password = password

  return {
    getData : function(){
      return "username: " + username + "\n" +
             "password: " + password
    },
    getUsername : function(){
      return username
    },
    getPassword : function(){
      return password
    },
    setData : function( newName, newPassword) {
      username = newName
      password = newPassword
    },
    setPassword : function( newPassword ){
      password = newPassword
    },
    setUsername : function( newName ){
      username = newName
    },

      // nameMatch: function(){
      // if (username == password) {
      //   password = prompt("Password cannot be the same as username. Renter password: ")
      //   return password
      // }
    // }
  }
}
function matchingInputs( object ){
  if (object.getUsername() == object.getPassword()) {
    newPassword = prompt("Password cannot be the same as username. Renter password: ")
    object.setPassword(newPassword)
    return object.getPassword()
  }
  }
}

// CHECK LENGTH OF USERNAMES AND PASSWORDS
function charactercheck( object ){
  var nameLength = (object.getUsername()).length
  if (nameLength < 6){
  newusername = promt
  }
}

// instantiate a new user
var user1 = newUser( username, password)
matchingInputs(user1)


function charactercheck(){
  if()
}
