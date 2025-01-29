const accountId = 12333;
let accountEmail = "paras@gmail.com";
var accountPassword = "12345";
accountPassword = "Jaipur";
let accountstate;

//accountId = 2 is not allowed//

accountEmail = "rahu@gmail.com";
accountPassword ="145";
accountPassword = "Patna";

console.log(accountId)
/* Prefer not use var because of issue in block scope and functional scope*/
console.table([accountId,accountEmail, accountPassword, accountstate ])