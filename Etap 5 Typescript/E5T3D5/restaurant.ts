import { EventEmitter } from 'events';
import {
    RestaurantsEventName,
    RestaurantEvent,
    RestaurantTableCountChangeEvent,
} from "./types/restaurants-events";

class Restaurant extends EventEmitter {
    /**
     * Otwarcie restauracji.
     */
    open() {
        (this.emit as RestaurantEvent)(RestaurantsEventName.Open);
    }

    /**
     * Zamknięcie restauracji.
     */
    close() {
        (this.emit as RestaurantEvent)(RestaurantsEventName.Close);
    }

    /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
    reserveTable() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantsEventName.TableCountUpdate, -1);
    }

    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantsEventName.TableCountUpdate, 1);
    }

    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantsEventName.TableCountUpdate, -1);
    }

    /**
     * Stolik się popsuł, odpadła noga :/
     */
    markTableAsBroken() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantsEventName.TableCountUpdate, -1);
    }

    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
    cleanupTable() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantsEventName.TableCountUpdate, 1);
    }
}

export {
  Restaurant,
};