import path from 'path';
import fs from 'fs';
import zlib from "zlib";
export function compressFile(workingDir, fileName, destinationName) {
    if (!fileName || !destinationName) {
        console.log(`Invalid input`);
        return
    }
    const filePath = path.join(workingDir, fileName,);
    const destinationFile = path.join(workingDir, `${destinationName}.gz`);
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(destinationFile);
    const gzip = zlib.createGzip();
    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on("finish", () => {
        console.log(`File compressed `);
    });

    readStream.on("error", (error) => {
        console.error(`Error reading file: ${error.message}`);
    });

    writeStream.on("error", (error) => {
        console.error(`Error writing compressed file: ${error.message}`);
    });
}

export function decompressFile(workingDir, fileName, destinationName) {
    if (!fileName || !destinationName) {
        console.log(`Invalid input`);
        return;
    }
    const filePath = path.join(workingDir, fileName,);
    const destinationFile = path.join(workingDir, destinationName);
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(destinationFile);
    const guzip = zlib.createGunzip();

    readStream.pipe(guzip).pipe(writeStream);

    writeStream.on("finish", () => {
        console.log(`File decompressed `);
    });

    readStream.on("error", (error) => {
        console.error(`Error reading file: ${error.message}`);
    });

    writeStream.on("error", (error) => {
        console.error(`Error writing compressed file: ${error.message}`);
    });
}