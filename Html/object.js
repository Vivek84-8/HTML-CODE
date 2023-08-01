const user = {name: 'Raju' , email: 'raju@hotmail.com' , password: '8459' };

console.log(user.name);
console.log(user['email'] );

user.address = 'lucknow';

console.log(user);

user.password = '1234';

console.log(user);

let customkey = 'email';

console.log(user[customkey]);
user[customkey] = 'raju@hotmail.com';

console.log(user);