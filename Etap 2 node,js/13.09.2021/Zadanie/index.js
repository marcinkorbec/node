const {Restaurant} = require('./restaurant');

const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
  .on('open', () => console.log('Restauracja została otwarta'))
  .on('tableCount', message, table => {
    tablesCount += table;
    console.log(`${message} Dostępnych stolików: ${tablesCount}`)
  })
  // .on('cancelReserve', table => {
  //   tablesCount += table;
  //   console.log(` Dostepnych stolików: ${tablesCount}`)
  // })
  // .on('withoutNow', table => {
  //   tablesCount += table;
  //   console.log(`Dostepnych stolików: ${tablesCount}`)
  // })
  // .on('markTableAsBroken', table => {
  //   tablesCount += table;
  //   console.log(`Dostepnych stolików: ${tablesCount}`)
  // })

  // .on('cleanupTable', table => {
  //   tablesCount += table;
  //   console.log(`Dostepnych stolików: ${tablesCount}`)
  // })
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

