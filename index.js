const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')

const files = require('./lib/files')

clear()

console.log(
    chalk.yellow(
        figlet.textSync('ifc-to-gltf', { horizontalLayout: 'full'})
    )
)

if(process.argv[2] == '-i') {
    if(process.argv[3] != '') {
        if(files.fileExists('./' + process.argv[3])) {
            if(files.convert('./' + process.argv[3])) {
                console.log('Done!')
            }
        } else {
            console.error('No valid File passed!')
        }
    } else {
        console.error('No File passed!')
    }
} else {
    console.error('Please pass a file!')
}





