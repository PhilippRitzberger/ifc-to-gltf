const fs = require('fs')
const obj2gltf = require('obj2gltf');

var ifcConvert = require('ifc-convert')

module.exports = {
    fileExists: (filePath) => {
        return fs.existsSync(filePath)
    }, 
    convert: (filePath) => {
        //console.log(filePath)
        ifcConvert(filePath, 'dest.obj')
        .then(() => {
            obj2gltf('./dest.obj')
            .then(function(gltf) {
                const data = Buffer.from(JSON.stringify(gltf));
                fs.writeFileSync('./model.gltf', data);
            })
        }).catch((err) => {
            console.log('Error 1! \n')
            console.log(err)
        })
    }
}