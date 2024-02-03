import path from 'path';
import fs from "fs/promises";
import { existsSync } from 'fs'

export async function readFile(workingDir, fileName) {
    if (!fileName) {
        console.log(`Invalid input`);
        return;
    }
    const filePath = path.resolve(workingDir, fileName.trim());

    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        console.log(`File content:\n${fileContent}`);
    } catch (error) {
        console.error(`Invalid file: ${filePath}`);
    }

}


export function createFile(workingDir, fileName) {
    if (!fileName) {
        console.log(`Invalid input`);
        return;
    }
    const filePath = path.resolve(workingDir, fileName.trim());
    if (existsSync(filePath)) {
        console.error(`File with the same name already exists`);
    } else {
        fs.writeFile(filePath, '');

    }
};

export function renameFile(workingDir, fileName, newFileName) {
    if (!fileName || !newFileName) {
        console.log(`Invalid input`);
        return;
    }
    const sourceFilePath = path.join(workingDir, fileName);
    const destinationFilePath = path.join(workingDir, newFileName);
    if (existsSync(sourceFilePath) && !existsSync(destinationFilePath)) {
        fs.rename(sourceFilePath, destinationFilePath);
        console.log(`File rename`);
    }
    else {
        console.log(`Invalid input`);
    }
}

export function  copyFile(workingDir, fileName, newDir){
    if (!fileName || !newDir) {
        console.log(`Invalid input`);
        return;
    }
    const sourceFilePath = path.join(workingDir, fileName.trim());
    const pathDir = path.join(workingDir,  newDir.trim());
    const destinationFilePath = path.join(workingDir,  newDir.trim(), fileName.trim());    
    if (existsSync(sourceFilePath) && existsSync(pathDir)) {
        fs.copyFile(sourceFilePath, destinationFilePath);
        console.log(`File copied.`);
    }
    else {
        console.log(`Invalid input`);
    }

}
//
export function deleteFile(workingDir, fileName) {
    if (!fileName ) {
        console.log(`Invalid input`);
        return;
    }
    const filePath = path.join(workingDir, fileName);
    if (existsSync(filePath)) {
      fs.rm(filePath);  
      console.log(`File deleted.`);
    } else {
      console.log(`Invalid input`);
    }
  }

export function moveFile(workingDir, fileName, newDir) {
    if (!fileName || !newDir) {
        console.log(`Invalid input`);
        return;
    }
    copyFile(workingDir,  fileName, newDir);
    deleteFile(workingDir, fileName);
  }
  
