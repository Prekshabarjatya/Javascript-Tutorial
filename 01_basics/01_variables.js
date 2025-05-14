const accountId = 144532;
let accountEmail = "preksha@gmail.com";
var accountPassword = "12345";
accountCity = "Indore";
let accountState; // declare this if you want to include it

/*
Prefer not to use var 
because of issues in block scope 
and functional scope.
*/

accountCity = "Ujjain";
// accountId = 2 // Not allowed because it's a const
accountEmail = "kunthu@gmail.com";
accountPassword = "123456";
accountCity = "Ujjain";

console.log(accountId);

// Correct usage of console.table
console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
});
