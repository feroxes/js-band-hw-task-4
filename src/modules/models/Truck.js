import Transport from './Transport';

export default class Truck extends Transport {
  constructor(props) {
    super(props);
    this.licensePlate = props.licensePlate;
    this.typeOfGas = props.typeOfGas;
  }

  set showAverageSpeed(value) {
    this.averageSpeed = `${this.averageSpeed} ${value}`;
  }
}
