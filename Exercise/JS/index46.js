const userAndPassword = 'pepito2017,12345';
const username = userAndPassword.substr(0,10);
const password = userAndPassword.substr(10,6)

console.log(`The user ${username} has ${password} as password`);