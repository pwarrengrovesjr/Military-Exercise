// Complete this on your own in VSCode or utilize repl.it in case you get stuck and want to share your code with an instructor via Slack.

let yourName = 'Joash';

let yourRank = 'Private'; 

let yourAge = 52;

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

if (yourAge < 18) {
    console.log(`${yourRank} ${yourName} is too young for the military!`)
} else if (yourName === 'Rugen' && yourRank === 'Count') {
    console.log('My name is Inigo Montoya, you killed my father, prepare to die.')
} else if (yourRank === 'Captain') {
    console.log(`Aye aye Captain ${yourName}.`)
} else if (yourRank === 'Private' && yourAge > 40) {
    console.log(`What have you been doing with your life ${yourRank} ${yourName}?`)
} else {
    const bdayNumber = yourAge + getOrdinal(yourAge);
    console.log(`Hello ${yourRank} ${yourName}, I cannot wait to celebrate your ${bdayNumber} birthday next year!`)
}
