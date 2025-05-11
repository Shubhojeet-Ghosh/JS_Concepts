// "use strict";

const accountId = 123456
let accountEmail = "shubhojeet.official@gmail.com"
var accountPassword = "12345"
accountCity = "Noida" // avoid this statement as it creates a var type variable and will throw an error when in strict mode
let accountState;
// accountId = 2 // not allowed

accountEmail = "shubh.com"
accountPassword = "678910"
accountCity = "Gurgaon"

// prefer not to use var , instead use let to avoid block and functional scope issues
console.table([accountId,accountEmail,accountPassword,accountEmail,accountState]);
