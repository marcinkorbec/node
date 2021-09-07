// const {createHmac} = require('crypto');
//
// const salt = '%^&*hgvcbsekuhfed7qe386e8';
//
// const hash = createHmac('sha512', salt)
//   .update('Hello World from MEGAKURS!')
//   .digest('hex');
//
// console.log(hash);

// const { pbkdf2 } = require('crypto');
// const originalText = 'Tekst do zhashowania';
// const SALT = '847ruegf76fog8ngfcofoefgi7wggf wgfo'
//
// pbkdf2(originalText, SALT, 100000, 64, 'sha512', (err,derivedKey)=> {
//   if (err) throw err;
//   console.log(derivedKey.toString('hex'));
// });

// const {hash} = require('bcrypt');
// hash('tekst do shashowania', 10, function(err, hash) {
//   console.log(hash);
// })

const {hash, compare} = require('bcrypt');
const textOrigin = 'tekst do shashowania';

hash(textOrigin, 10, function(err, hash) {
  if (err) {
    console.log(err);
  } else {
    console.log(hash);

    compare(textOrigin, hash, function(err, res) {
      if (res) {
        console.log('Logged in!')
      } else {
        console.log('Nope!')
      }
    });
  }
});

// const {compare} = require('bcrypt');

