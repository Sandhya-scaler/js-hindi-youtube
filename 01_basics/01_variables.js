// prefer not to use 'var', use 'let'
const accountId =144553
let accountEmail = "sandhya@gmail.com"
var accountpass = "jaipur"
// accountId=4 : reassignment is not allowed for const
// var 123account="jaipur" : starting with int and char is not allowed, but they can be used after alphabets
var account123 = "haryana"
accountEmail ="sst.com"
console.log(accountId);
let myname;
// another mathod can be used to print  all statements in tabular form by avoiding writing code for them again and again : 
console.table([accountId,accountEmail,accountpass,account123,myname])
// javascript me agr aap var ko declare krke chhod dete ho and koi value nhi dete ho, to vo result me 'undefined' show krega




