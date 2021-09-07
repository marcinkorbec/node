const { pbkdf2 } = require('crypto');
const textUser = process.argv[2];
const SALT = '847ruegf76fog8ngfcofoefgi7wggf wgfo';
const PWD = 'e7326c6ac1cc520de23fb7b0d045c7fb89e37dfbb0d691f9520edd078dddcf257437da10a561a2785117d5260c4f4f4f3e5157c20d24eacdaa390300dc7be18a';

pbkdf2(textUser, SALT, 100000, 64, 'sha512', (err,derivedKey)=> {
  if (err) {
    console.error('Error', err);
  } else {
    const hash = derivedKey.toString('hex');
    if (hash === PWD) {
      console.log('Logged in!')
    } else {
      console.log('Nope!')
    };
  }
});

