interface CarInterface {
  color: string;
  numberOfWheels: number;
  transmission: string;
  move(km: number, speed: number): number;
  lat: number;
  lng: number;
}

class Car implements CarInterface {
  color;
  numberOfWheels;
  transmission: string;
  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  move(km, speed) {
    return km * speed;
  }
}

function generic<T>(color: T): T {
  return color;
}

generic('green');
generic(123434);

console.info();
const str = 'string';

/**
 *  nweFunc get parameters and check that this parameters are in the car
 * @param color {string} - color of car
 * @param number - number of wheels in the car
 * @param array -
 * @return {boolean} - check if car the same color
 */
function newFunc(color: string, number: number, array: string[], obj: any): boolean {
    return true;
}
