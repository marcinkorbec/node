import { unlink } from ('fs').promises;

export (async function () {
    const oldFile: string = process.argv[2];
    try {
        await unlink(oldFile)
    } catch (e) {
        if (e.code === 'ENOENT') {
            console.log(`${oldFile} does not exist.`);
        } else {
            console.log('Unknown error:', e);
        }
    }
})();