// Write your code in this file!
const currentUser = "string"




const welcomeMessage = "Welcome to Flatbook, "+ currentUser + "!" ;
console.log(welcomeMessage);




const upperCaseCurrentUser = currentUser.toUpperCase();
const excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + upperCaseCurrentUser + "!";
console.log(excitedWelcomeMessage);





const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
const shortGreeting = "Welcome, " + firstInitial + "!";
console.log(shortGreeting);