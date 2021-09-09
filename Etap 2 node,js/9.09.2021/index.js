// const {createReadStream, createWriteStream} = require('fs');
// const {pipeline} = require('stream').promises;
//
//
// (async () => {
//   await pipeline (
//     createReadStream('picture.png'),
//     createWriteStream('picture2.png'),
//   );
//
//   console.log('Done!');
// })();

// const {createReadStream, createWriteStream} = require('fs');
//
// const r = createReadStream('picture.png');
// const w = createWriteStream('picture2.png');
//
// r.pipe(w);
// r.on('end', ()=> console.log('Ready'));

const {createReadStream, createWriteStream} = require('fs');

const r = createReadStream('picture.png');
const w = createWriteStream('picture2.png');

r.on('data', data=> w.write(data));
r.on('end', ()=> {
  w.close();
  console.log('Ready!')
});

