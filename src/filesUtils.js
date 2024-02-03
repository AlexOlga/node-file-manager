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
