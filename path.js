const path = require('path');
const filePath = __filename;
const dirPath = __dirname;


console.log(dirPath)
console.log(filePath);
console.log("File Name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("Path Parsed:", path.parse(filePath));

console.log("Joined Path:", path.join(dirPath, 'files', 'data.txt'));
