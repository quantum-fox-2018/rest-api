var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'katakunci';
const someOtherPlaintextPassword = 'rahasia';

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//         console.log(salt)
//         console.log(hash);

//         bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
//             // res == true
//             console.log(res)
//         });
//         bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
//             // res == false
//             console.log(res)
//         });
//     });
// });


var salt = bcrypt.genSaltSync(saltRounds);
var hash = bcrypt.hashSync(myPlaintextPassword, salt);

console.log(hash);

let pass1 = bcrypt.compareSync(myPlaintextPassword, hash); // true
let pass2 = bcrypt.compareSync(someOtherPlaintextPassword, hash); // false

console.log(pass1);
console.log(pass2);