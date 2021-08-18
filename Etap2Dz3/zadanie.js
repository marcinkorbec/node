// istnieje moduł dns, który służy m in do operacji związanych z serwerami nazw.
// istnieje w nim funkcja dns.lookup(host), która jest asynchroniczna.
// Spróbuj sprawdzić dzięki temu jaki jest adres IP hosta google,com.
// -Wykonaj zadanie na callbackach.
// -Następnie wykorzystaj util.promisify().
// -Na końcu spróbuj wykorzystać specjalną wersje dostępną w dns.promises async/await.

const dnsAddress = require('dns');
const dnsPromises = require('dns').promises;
const util = require('util');
const dnsPromised = util.promisify(dnsAddress.lookup)

//WERSJA Z CALLBACK
{
  dnsAddress.lookup('google.com', 'utf8', (error, data) => {
    if (error === null) {
      console.log(data);
    } else {
      console.log('Oh shit!', error)
    }
  });
}

//WERSJA Z util.promisify
{
  dnsPromised('google.com', 'utf8',)
    .then(data => {
      console.log(data.address);
    })
    .catch(error => {
      console.log('Oh nie kurwa!', error);
    })
}

//wersja z .promises i async/await
{
  (async () => {
    try {
      const data = await dnsPromises.lookup('google.com', 'utf8');
      console.log(data.address);
    } catch(err) {
      console.log('O nie!', err);
    }
  })();
}