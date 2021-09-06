{
  const {promisify} = require('util');
  const scrypt = promisify(require('crypto').randomBytes);
  const {createCipheriv} = require('crypto');

  const algorithm = 'aes-192-cbc'; //AES 192
  const password = 'Password used to generate key';

  (async () => {
    //First, we'll generate the key.The key lenghth is dependent on the algorithm.
    //In this case for aes192, it is 24bytes (192 bits).
    const key = await scrypt(password, 'salt', 24);
    const iv = await randomBytes(16);

    const cipher = createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log({
      encrypted,
      iv: iv.toString('hex'),
    });
  })();
}

{
  const { promisify } = require('util');
  const scrypt = promisify(require('crypto').scrypt);
  const { createDecipheriv } = require('crypto');

  const algorithm = 'aes-192-cbc';
  const password = 'Password used to generate key';
  const encrypted = 'eed497f53ea697fa05584c34a54ae04c60d3169d47fabedc04c5fe797550aeed';
  const ivHex = '976c423614aea8cfad695a735b321255';

  (async () => {
    //First, we'll generate the key. The key length is dependent on the algorithm.
    //In this case for aes192, it is 24 bytes (192 bits).
    const key = await scrypt(password, 'salt', 24);
    const iv = Buffer.from(ivHex, 'hex'); //Initialization vector.

    const decipher = createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log(decrypted);
  })();
}