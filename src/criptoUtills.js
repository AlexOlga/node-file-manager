import path from 'path';
import fs from 'fs';
import crypto from "crypto";

export function calcHash(workingDir, fileName) {
    if (!fileName) {
        console.log(`Invalid input`);
        return
    }
    const filePath = path.join(workingDir, fileName);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {

        const hash = crypto.createHash("sha256");
        const stream = fs.createReadStream(filePath);
        stream.on("data", (data) => {
            hash.update(data);
        });

        stream.on("end", () => {
            const fileHash = hash.digest("hex");
            console.log(`Hash: ${fileHash}`);
        });

    } else {
        console.log(`Invalid file: ${filePath}`);
    }
}