export default class Transport {
  constructor(props) {
    this.id = props.id;
    this.model = props.model;
    this.producedYear = props.producedYear;
    this.capacity = props.capacity;
    this.averageSpeed = props.averageSpeed;
  }

  set showCapacityInPounds(value) {
    this.capacity = `${this.capacity} ${value}`;
  }
}
