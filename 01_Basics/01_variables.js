const accountId = 123
let accountEmail = "anujsisodiya@gmail.com"
var accountPassword = "123"

accountCity = "Agra"

// accountId = 2314 // not allowed as var does not supports Block scopes and Functional Scopes.

accountPassword = "3231"
accountEmail = "anujsisodiya@google.com"
accountCity = "Dehradun"

console.log(accountId)

console.table([accountId,accountEmail,accountPassword])