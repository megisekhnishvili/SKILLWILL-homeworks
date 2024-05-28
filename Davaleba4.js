// 1. დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace,valueToReplaceWith), ჩაანაცვლებს
// "valueToReplace"-ს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ stringს.
//  არ გამოიყენო string.replace() ფუნქცია.
function Replace(str, valueToReplace, valueToReplaceWith) {
    let result = '';
    let i = 0;
    
    while (i < str.length) {
        if (str.substr(i, valueToReplace.length) === valueToReplace) {
            result += valueToReplaceWith;
            i += valueToReplace.length;
        } else {
            result += str[i];
            i++;
        }
    }
    
    return result;
}

let originalString = "hello Skillwill, hello Megi";
let replacedString = Replace(originalString, "hello", "hi");
console.log(replacedString); 
// 2. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას(წინადადებას), 
// მასში ყოველ სიტყვას გადაწერს დიდი ასოთი და დააბრუნებს ახალ წინადადებას.
function capitalizeWords(sentence) {
    let words = sentence.split(' ');
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toUpperCase();
    });
    
    return capitalizedWords.join(' ');
}
let sentence = "hello, this is a sentence.";
let result = capitalizeWords(sentence);
console.log(result); 
// 3. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს მომხმარებლების მასივს და დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის მიხედვით. მაგალითად, ჩავთვალოთ, რომ გვაქვს
// [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age:20}]. ფუნქციამ უნდა დააბრუნოს 
// [{name:‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}]. შეგიძლია გამოიყენო sort() ფუნქცია
function sortUsersByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}
const users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 }
];
const sortedUsers = sortUsersByAge(users);
console.log(sortedUsers);