export const shipList = [];

export const truckList = [];

export const deliveryList = [];

export const setList = (listName, list) => {
  list.forEach((item) => {
    if (listName === 'ship') shipList.push(item);
    else if (listName === 'truck') truckList.push(item);
    else deliveryList.push(item);
  });
};
