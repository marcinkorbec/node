// istnieje moduł dns, który służy m in do operacji związanych z serwerami nazw.
// istnieje w nim funkcja dns.lookup(host), która jest asynchroniczna.
// Spróbuj sprawdzić dzięki temu jaki jest adres IP hosta google,com.
// -Wykonaj zadanie na callbackach.
// -Następnie wykorzystaj util.promisify().
// -Na końcu spróbuj wykorzystać specjalną wersje dostępną w dns.promises async/await.

const {dns} = require('dns');

dns.lookup('google.com', 'utf8', (error, data) => {
  if (error === null) {
    console.log(data);
  } else {
    console.log('Oh nie!', error)
  }
});