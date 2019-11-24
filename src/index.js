// SCSS
import './assets/style/main.scss';
import './modules/handleFroms';
import TransportFactory from './modules/models/TransportFactory';
import Delivery from './modules/models/Devilery';
import LocalStore from './modules/services/localStorage';

import { setList } from './modules/lists';
import { renderList } from './modules/renderList';

const localLists = LocalStore.getLocalList();

for (const key in localLists) {
  if (localLists[key]) {
    localLists[key].forEach((item) => {
      const list = [];
      if (key === 'ship') {
        const shipProps = {
          id: item.id,
          model: item.model,
          producedYear: item.producedYear,
          capacity: item.capacity,
          averageSpeed: item.averageSpeed,
          serialNumber: item.serialNumber,
          countOfTeam: item.countOfTeam,
        };
        list.push(new TransportFactory('ship', shipProps));
      } else if (key === 'truck') {
        const truckProps = {
          id: item.id,
          model: item.model,
          producedYear: item.producedYear,
          capacity: item.capacity,
          averageSpeed: item.averageSpeed,
          licensePlate: item.licensePlate,
          typeOfGas: item.typeOfGas,
        };
        list.push(new TransportFactory('truck', truckProps));
      } else {
        const deliveryProps = {
          transportModel: item.transportModel,
          cargoCost: item.cargoCost,
          distanceCost: item.distanceCost,
        };
        list.push(new Delivery(deliveryProps));
      }
      setList(key, list);
      renderList(key);
    });
  }
}
