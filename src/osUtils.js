import os from 'os';

export function osInfo(flag) {
    switch (flag.trim()) {
        case '--EOL':
            console.log(`End-Of-Line character: ${os.EOL.charCodeAt(0)}`);
            break;
        case '--cpus':
            console.log('CPU Information:');
            os.cpus().forEach((cpu, index) => {
                console.log(`- CPU ${index + 1}: ${cpu.model} (${cpu.speed} GHz)`);
            });
            break;
        case '--homedir':
            console.log(`Home directory: ${os.homedir()}`);
            break;
        case '--username':
            console.log(`Current system user name: ${os.userInfo().username}`);
            break;
        case '--architecture':
            console.log(`CPU Architecture: ${os.arch()}`);
            break;
        default:
            console.log('Invalid OS command. Available commands: --EOL, --cpus, --homedir, --username, --architecture');
    }
}