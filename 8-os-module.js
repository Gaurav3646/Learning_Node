const os = require('os')
const user = os.userInfo();
// info about current user
console.log(user)

// method returns system uptime in seconds
console.log(`Sytem uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()

}
console.log(currentOs);