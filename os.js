const os=require("os")
console.log("Free Memory",os.freemem()/(1024*1024*1024))
console.log("Free Memory1",os.freemem()/1024/1024/1024)
console.log("total Memory",os.totalmem()/(1024*1024*1024))
console.log("Version",os.version())
console.log("Processor",os.cpus())
console.log("Architecture",os.arch())
console.log("Uptime",os.uptime())
console.log("UserInfo",os.userInfo())
