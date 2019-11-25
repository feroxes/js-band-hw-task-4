class LocalStorage {
  constructor() {
    if (!localStorage.getItem('JS-Band-token')) {
      localStorage.setItem('JS-Band-token', '1234');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getLocalList() {
    return {
      ship: JSON.parse(localStorage.getItem('shipList')),
      truck: JSON.parse(localStorage.getItem('truckList')),
      delivery: JSON.parse(localStorage.getItem('deliveryList')),
    };
  }

  // eslint-disable-next-line class-methods-use-this
  saveItemToStorage(list, listName) {
    localStorage.setItem(`${listName}List`, JSON.stringify(list));
  }
}

const instance = new LocalStorage();
Object.freeze(instance);

export default instance;
