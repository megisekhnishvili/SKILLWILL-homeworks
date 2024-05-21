//1. მოცემულია მასივი [{name: 'Temo', age: 25}, {name: 'Lasha', age:21}, {name:Ana, age:28}]
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user - ების მასივს და დააბრუნებს ყველაზე პატარა ასაკის 
// მქონე ადამიანის სახელს.
function findYoungestPerson(users) {
    if (users.length === 0) {
      return null;
    }
  
    let youngestPerson = users[0];
  
    for (let i = 1; i < users.length; i++) {
      if (users[i].age < youngestPerson.age) {
        youngestPerson = users[i];
      }
    }
  
    return youngestPerson.name;
  }
  
  const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
  ];
  
  console.log(findYoungestPerson(users)); 
//2. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე 
//ახალ(განსხვავებულ) ობიექტს.
const user = {
    firstname: 'Megi',
    lastname: 'Sekhniashvili',
    profile: {
        age: 22
    },
    targets: ['target1', 'target2']

}
const user2 = {
    ...user,
    profile: {
        ...user.profile
    },
    targets: [...user.targets]
}

console.log(user.profile.age)

//3. დაწერე ფუნქცია, სადაც a და b მომხმარებლები აგორებენ კამათელს მანამ, სანამ არ გაგორდება 3.
// რომელიც უფრო ნაკლებ ცდაში გააგორებს სამიანს ის არის გამარჯვებული.

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function playDiceGame() {
    let aTries = 0;
    let bTries = 0;
    

    while (true) {
      aTries++;
      if (rollDice() === 3) {
        break;
      }
    }
    
    
    while (true) {
      bTries++;
      if (rollDice() === 3) {
        break;
      }
    }
    
    if (aTries < bTries) {
      return 'User a wins';
    } else if (bTries < aTries) {
      return 'User b wins';
    } else {
      return 'It\'s a tie';
    }
  }
  
  console.log(playDiceGame());