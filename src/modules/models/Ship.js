import Transport from './Transport';

export default class Ship extends Transport {
  constructor(props) {
    super(props);
    this.serialNumber = props.serialNumber;
    this.countOfTeam = props.countOfTeam;
  }

  set showAverageSpeed(value) {
    this.averageSpeed = `${this.averageSpeed} ${value}`;
  }
}
