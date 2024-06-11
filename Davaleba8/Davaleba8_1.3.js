1. 
function expo(digit, degree, callback) {
    function recursiveExpo(digit, degree) {
      if (degree === 0) return 1;
      return digit * recursiveExpo(digit, degree - 1);
    }
    
    const result = recursiveExpo(digit, degree);
    callback(result);
  }
  
  expo(5, 3, (result) => {
    console.log(result); 
  });

3. 
function deepCopyAsync(obj) {
    return new Promise((resolve, reject) => {
      if (typeof obj !== 'object' || obj === null) {
        return reject(new Error('Argument must be a non-null object'));
      }
  
      function deepCopy(obj) {
        if (obj === null || typeof obj !== 'object') {
          return obj;
        }
  
        if (Array.isArray(obj)) {
          return obj.map(deepCopy);
        }
  
        const copiedObj = {};
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            copiedObj[key] = deepCopy(obj[key]);
          }
        }
        return copiedObj;
      }
  
      resolve(deepCopy(obj));
    });
  }
  

  const original = { a: 1, b: { c: 2 } };
  
  deepCopyAsync(original)
    .then(copy => {
      console.log(copy); 
    })
    .catch(error => {
      console.error(error);
    });
  