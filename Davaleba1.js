// 1. დაწერე ფუნქცია, რომელიც მიიღებს a და b პარამეტრებს და დააბრუნებს ტექსტს "ტოლია" თუ a უდრის b-ს, 
// ხოლო წინააღმდეგ შემთხვევაში, დააბრუნებს "არ არის ტოლი".
function number(a, b){
    if (a == b){
        return `ტოლია`;
    }else{
        return 'არ არის ტოლი';
    }
} 
// console.log(number(5, 7));
// (გაითვალისწინე რომ ა a და b ყოველთვის ერთი დაიგივე ტიპის არ არის)
// 2.დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ტემპერატურას ფარენჰეიტებში და დააბრუნებს ტემპერატურას ცელსიუსში.
// (თუ პარამეტრი არ არის რიცხვითი მონაცემი დააბრუნე - false).
// ფორმულა: 5/9 * (F - 32)
function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) {
        return false;
    }else{
        return (5/9) * (fahrenheit-32);
    }
}
console.log(fahrenheitToCelsius(32));
// 3. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს a(პირეელი რიცხვი), b(მეორე რიცხვი) და operation(+, -, *, /)
// და დააბრუნებს ახალ მნიშვნელობას, რომელიც მიიღება ამ ორ რიცხვზე operation ცვლადში განსაზღვრული ოპერაციით.
// (თუ a და b არ არიან რიცხვები, ან თუ operation ცვლადში არიც უცნობი, ოპერაცია დააბრუნე - false)
function Operation(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number' )
    {
        return false;  
    }

    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else if (operation === '/') {
        if (b === 0 ) {
            return false;  
        }
        return a / b;
    } else {
        return false;  
    }
}
console.log(Operation(36, 6, '/'));