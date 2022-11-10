const fs = require("fs")

const fileName = `filename`
const needMb = 10;

const size = 1024000 * needMb;

const bufferStart = fs.readFileSync(fileName)

fs.writeFileSync(`${fileName}`, Buffer.concat([bufferStart, Buffer.alloc(size)]));