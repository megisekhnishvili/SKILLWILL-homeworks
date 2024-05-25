// 1. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2). 
// ფუნქციამ უნდა დააბრუნოს 2 - ელემენტიანი მასივი, სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე ელემენტი - მესამე ელემენტიდან დაწყებული ყველა
// დანარჩენის ნამრავლი.
function SumProduct(first, second, ...rest) {
    if (rest.length < 1) {
      throw new Error("The function requires at least three parameters.");
    }
  
    const sum = first + second;
    let product = 1;
    
    for (const number of rest) {
      product *= number;
    }
    
    return [sum, product];
  }
  
  
  const result = SumProduct(3, 4, 5, 6);
  console.log(result); 

// 2. დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი: user.banks[2].address.city.
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს city-ს.
// გამოიყენე destructuring-. თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს undefined.
function getCityFromUser(user) {
    const { banks } = user;
    if (!banks || !Array.isArray(banks) || banks.length < 3) {
      return undefined;
    }
  
    const { address } = banks[2];
    if (!address) {
      return undefined;
    }
  
    const { city } = address;
    return city;
  }
  
  const user = {
    banks: [
      { address: { city: "Tbilisi" } },
      { address: { city: "Gori" } },
      { address: { city: "Qutaisi" } },
    ]
  };
  
  console.log(getCityFromUser(user)); 
  
  const incompleteUser = {
    banks: [
      { address: { city: "Tbilisi" } },
      { address: { city: "Gori" } },
    ]
  };
  
  console.log(getCityFromUser(incompleteUser)); 

// 3. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე 
//ახალ(განსხვავებულ) ობიექტს.
const user1 = {
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