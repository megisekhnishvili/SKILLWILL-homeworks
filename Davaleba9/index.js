const validator = require('validator');

const words = ['test@test.com', 'abcDE123'];

words.forEach(word => {
  const result = validator.isEmail(word);
  console.log(`${word} is ${result ? 'a valid' : 'an invalid'} email address.`);
});
