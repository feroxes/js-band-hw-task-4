import TransportFactory from './models/TransportFactory';
import Delivery from './models/Devilery';

import { shipList, truckList, deliveryList } from './lists';
import { renderList } from './renderList';

const forms = {
  shipForm: document.getElementById('shipFrom').elements,
  truckForm: document.getElementById('truckFrom').elements,
  deliveryForm: document.getElementById('deliveryForm').elements,
};

const buttons = {
  addShip: document.getElementById('addShip'),
  addTruck: document.getElementById('addTruck'),
  addDelivery: document.getElementById('addDelivery'),
};


const formatTransportKey = (str) => str.split('_')[1];

const clearForm = (formInputs) => {
  // eslint-disable-next-line no-cond-assign
  for (let i = 0, element; element = formInputs[i++];) {
    if (element.type === 'text') {
      element.value = '';
    }
  }
};

const addNewList = (e) => {
  e.preventDefault();
  const listName = e.target.name;
  const formInputs = forms[`${listName}Form`];
  const data = {};
  // eslint-disable-next-line no-cond-assign
  for (let i = 0, element; element = formInputs[i++];) {
    if (element.type === 'text') {
      data[formatTransportKey(element.name)] = element.value;
    }
  }
  const speed = listName === 'ship' ? 'nm' : 'km';

  if (listName === 'ship') {
    const shipProps = {
      id: data.id,
      model: data.model,
      producedYear: data.producedYear,
      capacity: data.capacity,
      averageSpeed: data.averageSpeed,
      serialNumber: data.serialNumber,
      countOfTeam: data.countOfTeam,
    };
    const ship = new TransportFactory('ship', shipProps);

    ship.showCapacityInPounds = 'pounds';
    ship.showAverageSpeed = speed;
    shipList.push(ship);
  } else if (listName === 'truck') {
    const truckProps = {
      id: data.id,
      model: data.model,
      producedYear: data.producedYear,
      capacity: data.capacity,
      averageSpeed: data.averageSpeed,
      licensePlate: data.licensePlate,
      typeOfGas: data.typeOfGas,
    };
    const truck = new TransportFactory('truck', truckProps);

    truck.showCapacityInPounds = 'pounds';
    truck.showAverageSpeed = speed;
    truckList.push(truck);
  } else {
    const deliveryProps = {
      transportModel: data.transportModel,
      cargoCost: data.cargoCost,
      distanceCost: data.distanceCost,
    };
    const delivery = new Delivery(deliveryProps);

    deliveryList.push(delivery);
  }
  clearForm(formInputs);
  renderList(listName);
};

for (const key in buttons) {
  buttons[key].addEventListener('click', addNewList);
}
