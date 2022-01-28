export enum RestaurantsEventName {
    TableCountUpdate = 'tableCountUpdate',
    Open = 'open',
    Close = 'close',
}

export type RestaurantEvent = (eventName: RestaurantsEventName) => boolean;
export type RestaurantTableCountChangeEvent = (
    eventName: RestaurantsEventName.TableCountUpdate,
    incDec: number
) => boolean;