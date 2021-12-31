// const { watch } = require('chokidar');

// watch('.')
//     .on('add', path => console.log(`File ${path} has been added`))
//     .on('change', path => console.log(`File ${path} has been changed`))
//     .on('unlink', path => console.log(`File ${path} has been removed`))
//     .on('addDir', path => console.log(`Directory ${path} has been added`))
//     .on('unlinkDir', path => console.log(`Directory ${path}has been removed`))
//     .on('error', error => console.log(`Watcher error ${error}`))
//     .on('ready', () => console.log('Initial scan complete,Ready for changes'));

// watch('.', {
//     usePolling: true,
//     awaitWriteFinish: true,
//     ignoreInitial: true,
// })

// const { exec } = require('child_process');
// const cp = exec('dir');
// cp.on('close', () => {
//     console.log('Finished!');
// })

const { exec } = require('child_process');
const cp = exec('dir', {
    env: {
        PATH: 'c:\\Users\\Marcin\\Desktop\\MegaKurs\\Node\\'
    }
});
cp.on('close', () => {
    console.log('Finished!');
})

const { exec } = require('child_process');
const cp = exec('dir', {
    cwd: 'c:\\Users\\szymo\\Desktop\\MegaKurs\\Node\\'
});
cp.on('close', () => {
    console.log('Finished!');
})


const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

(async () => {
    const data = await exec('ping 8.8.8.8');
    console.log(data.stdout);
})();

const { pbkdf2 } = require('crypto');
const SALT = 'SDA;FJ4K008191284310923&(!    &^ TFJ: D* Y#j; lrkfaj; lkfj; dlaisdfjm; asiojea; l83uvnhao * (YH & (&@^* !& YF *& ';
const GOOD_PASSWORD = '1dc6cdd1e7945e87dcdbc7fea8bbebc983a3f105f1157ee3c6aba9c403a7d62fd9acdb8c86552ff8eea0a26e3edeed376cc381d118422bc9a96d0d118267f35c';
const pwd = process.argv[2];
pbkdf2(pwd, SALT, 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) {
        console.error('Error', err);
    } else if (derivedKey.toString('hex') === GOOD_PASSWORD) {
        console.log('Logged in.');
    }
});

