import getUserName from './src/getUserName.js'


let userName  = process.argv[2].split('=')[1];
// Defolt user name
if (!userName)  userName  =  'User';
  
console.log(`Welcome to the File Manager, ${userName}!`);
const readable = process.stdin;
readable.on("data", async function (data) {
    console.log(`тут будут команды, ${data}!`);
})
process.on("SIGINT", () => {
    process.exit();
  });
process.on("exit", () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  });
