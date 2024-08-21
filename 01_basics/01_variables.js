const accountId = 22665
let accountEmail = "vishesh55100@gmail.com"
var accountPassword = "12345"
accountCity = "Ayodhya"

// accountId = 2 not allowed

accountEmail = "vishesh555@gmail.com"
accountPassword = "123456"
accountCity = "faizabad"
let accountState;
console.log(accountId);


/*  
prefer not to use var
because of isseues in scope and functional  scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])