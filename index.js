import { homedir } from 'os';
import { createInterface } from 'readline';
import { defaultName, errorMessange } from './src/constants.js';
import { navigateUp, changeDir, listFiles } from './src/navigate.js';


let userName = process.argv[2].split('=')[1];
if (!userName) userName = defaultName;

// starting directory 
const homeDir = homedir();
let workingDir = homeDir;

console.log(`Welcome to the File Manager, ${userName}!`);
console.log(`You are currently in ${workingDir}`);

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.prompt();

rl.on('line', (data) => {
    const [command, ...args] = data.trim().split(' ');
    console.log(args[0]);
    switch (command) {
        case 'up':
            workingDir = navigateUp(workingDir);
            console.log(`up`);
            break;
        case 'cd':
            workingDir = changeDir(workingDir, args[0]);

            break;
            case 'ls':
                listFiles(workingDir);
                break;
        default:
            console.log(`${errorMessange}`);
    }
    rl.prompt();
    console.log(`You are currently in ${workingDir}`);
});

rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
});

