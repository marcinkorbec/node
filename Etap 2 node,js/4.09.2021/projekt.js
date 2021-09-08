const {readFile, writeFile} = require('fs').promises;
const {encryptText} = require('cipher').promises;

const SALT = '@#$%^&*((GRCY^uuyg';
const [,,fileName, pwd] = process.argv; //destrukturyzacja tablicy

(async () => {
  const content = await readFile(fileName, 'utf8');
  const encrypted = await encryptText(content, pwd, SALT);
  await writeFile(fileName, JSON.stringify(encrypted), 'utf8')
  console.log('Done.')
  // const key = await scrypt(password, 'salt', 24);
  // const iv = await randomBytes(16);
  //
  // const cipher = createCipheriv(algorithm, key, iv);
  // let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
  // encrypted += cipher.final('hex');
  // console.log({
  //   encrypted,
  //   iv: iv.toString('hex'),
  // });
})();