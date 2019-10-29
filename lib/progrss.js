const _cliProgress = require('cli-progress');
const _colors = require('colors');

var b1 = new _cliProgress.Bar({
    format: 'Processing: |' + _colors.black('{bar}') + '| {percentage}%',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
});

module.exports = {
    showProgress: () => {
        b1.start(200, 0, {
            speed: "N/A"
        })
    },
    updateProgress: (value) => {
        b1.update(value) 
    },
    stop: () => {
        b1.stop();
    }
}
