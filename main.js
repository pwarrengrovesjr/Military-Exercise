// Let's imagine that the military has contracted you to build a program that would greet new recruits based on their name, age and rank (yeah, somehow they already have a rank).

// First, create three new variables, `name` (string), `rank` (string) and `age` (number). These will change later, but for now set them to whatever you like.

// Below that you will need a series of conditionals that console log something different, depending on these three variables.

    // If our recruit is less than 18, log, 'You are too young for the military!’.
    // If our recruit’s name is ‘Rugen' and has a rank of ‘Count', log, ‘My name is Inigo Montoya, you killed my father, prepare to die’.
    // If our recruit has the rank of “Captain”, log, "Aye Aye Captain <NAME>”.
    // If our recruit has the rank of “Private” and is over 40, log, "What have you been doing with your life <NAME>?"

// For any other condition, log, 'Hello <RANK> <NAME>, I cannot wait to celebrate your <AGE + 1> th birthday next year!'

// Complete this on your own in VSCode or utilize repl.it in case you get stuck and want to share your code with an instructor via Slack.

const name = 'Joash';
const rank = 'Private'; 
const age = 52;
const bdayNumber = age + getOrdinal(age);
function getOrdinal(n) {
    let ord = 'th';
  
    if (n % 10 == 1 && n % 100 != 11) {
      ord = 'st';
    } else if (n % 10 == 2 && n % 100 != 12) {
      ord = 'nd';
    } else if (n % 10 == 3 && n % 100 != 13) {
      ord = 'rd';
    } return ord;
  }

if (age < 18) {
    console.log(`${rank} ${name} is too young for the military!`)
} else if (name === 'Rugen' && rank === 'Count') {
    console.log('My name is Inigo Montoya, you killed my father, prepare to die.')
} else if (rank === 'Captain') {
    console.log(`Aye aye Captain ${name}.`)
} else if (rank === 'Private' && age > 40) {
    console.log(`What have you been doing with your life ${rank} ${name}?`)
} else {
    console.log(`Hello ${rank} ${name}, I cannot wait to celebrate your ${bdayNumber} birthday next year!`)
}
