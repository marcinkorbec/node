const {readdir} = require('fs').promises;

async function readFileAndDirectories() {
  const list = await readdir('.');
  console.log(list);
}

readFileAndDirectories();