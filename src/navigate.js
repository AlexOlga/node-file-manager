import path from 'path';
import fs from 'fs';

function navigateUp(currentDir) {
    const parentDirectory = path.dirname(currentDir);
    if (fs.existsSync(parentDir)) {
        return parentDir;
    } else {
        return currentDir;
    }
};

function changeDir(currentDir, targetDir) {
    if (!targetDir) {
        console.log(`Invalid input`);
        return currentDir;
    }
    const newDir = path.resolve(currentDir, targetDir);
    if (fs.existsSync(newDir) && fs.statSync(newDir).isDirectory()) {
        return newDir;
    } else {
        console.log(`Invalid directory: ${targetDir}`);
        return currentDir;
    }
}
async function listFiles(workingDir) {
    fs.readdir(workingDir, (err, files) => {
        const Arrdir = [];
        const Arrfiles = [];
        files.forEach((file) => {
            const pathFile = path.resolve(workingDir, file);
            const stat = fs.lstatSync(pathFile);
            if (stat.isFile()) {
                Arrfiles.push({ Name: file, type: "file" });
            } else {
                Arrdir.push({ Name: file, type: "directory" });
            }
        });
        Arrdir.sort((a, b) => a["Name"] > b["Name"]);
        Arrfiles.sort((a, b) => a["Name"] > b["Name"]);
        console.table([...Arrdir, ...Arrfiles]);
    });
}
export { navigateUp, changeDir, listFiles };