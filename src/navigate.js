import path from 'path';
import fs from 'fs';
function navigateUp(currentDirectory) {
    console.log('currentDirectory', currentDirectory)
    const parentDirectory = path.dirname(currentDirectory);
    console.log(' parentDirectory',  parentDirectory);
   if ( fs.existsSync(parentDirectory)) {
      return parentDirectory;
     
    } else {
        return currentDirectory;
    }
};
export default navigateUp;