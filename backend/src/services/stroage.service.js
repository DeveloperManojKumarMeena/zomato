const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey : process.env.publicKey,
    privateKey : process.env.privateKey ,
    urlEndpoint : process.env.urlEndpoint
}); 

async function UploadFile(file,fileName) {
    
    const result = await imagekit.upload({
        file:file,
        fileName:fileName
    })
    return result
}
module.exports = {
    UploadFile
}