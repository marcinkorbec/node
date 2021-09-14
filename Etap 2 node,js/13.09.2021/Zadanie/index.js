const {Restaurant} = require('./restaurant');

const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
  .on('open', () => console.log('Restauracja została otwarta'))
  .on('reserve', table => {
    tablesCount += table;
    console.log(`Stolik został zarezerowany na teraz. Dostepnych stolików: ${tablesCount}`)
  })
  .on('cancelReserve', table => {
    tablesCount += table;
    console.log(`Odwołano rezerwację na stolik. Dostepnych stolików: ${tablesCount}`)
  })
  .on('withoutNow', table => {
    tablesCount += table;
    console.log(`Ktoś wziął stolik bez rezerwacji. Dostepnych stolików: ${tablesCount}`)
  })
  .on('markTableAsBroken', table => {
    tablesCount += table;
    console.log(`Stolik się popsuł, odpadła noga :/ . Dostepnych stolików: ${tablesCount}`)
  })

  .on('cleanupTable', table => {
    tablesCount += table;
    console.log(`Ktoś skończył jeść, czyścimy stolik i wraca do użytku. Dostepnych stolików: ${tablesCount}`)
  })
  .on('close', () => console.log('Restauracja została zamknięta.'))



megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 20."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 19."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 20."

megaRestaurant.close(); // "Zamknięto restaurację."

