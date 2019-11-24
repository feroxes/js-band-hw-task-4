import Truck from './Truck';
import Ship from './Ship';

export default class TransportFactory {
  constructor(type, props) {
    if (type === 'truck') {
      return new Truck(props);
    }
    if (type === 'ship') {
      return new Ship(props);
    }
  }
}
