const os = require('os');
const fs = require('fs');
const path = require('path');

const info = `System Project Report
-----------------------------------
OS: ${os.type()}
Platform: ${os.platform()}
Architecture: ${os.arch()}
CPU Cores: ${os.cpus().length}
Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
Uptime: ${os.uptime()} seconds
Home Directory: ${os.homedir()}
`

const filePath = path.join(__dirname, 'sys-info.txt');

fs.writeFile(filePath, info, (err) => {
    if (err) return console.error("Error:", err);
    console.log("System info saved to sys-info.txt");
  });