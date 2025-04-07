const os = require('os');

console.log("System Info:");
console.log("OS Type:", os.type());
console.log("Platform:", os.platform());

console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory:", (os.totalmem() / 1024 / 1024).toFixed(2), "MB");
console.log("Uptime:", os.uptime(), "seconds");

console.log("Home Directory:", os.homedir());
