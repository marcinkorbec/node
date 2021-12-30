const { rename } = require('fs').promises;
(async () => {
    try {
        await rename('./megaK/txt/testZmiana.txt', './testPrzeniesienie.txt')
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('Given file name does not exist.');
        } else {
            console.log('Oh no!', err);
        }
    }
})();