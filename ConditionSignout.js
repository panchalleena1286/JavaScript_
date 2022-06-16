//Show user a signout button if he is authenticated,
//othe wise show the option to Login/Signup

var authenticated = false;

// if(authenticated){
//     console.log("Show signout button");
// }

// else{
//     console.log("Show login button");
// }

authenticated ? console.log("Signout button") : console.log("Login");