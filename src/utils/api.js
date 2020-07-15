const dataCell = {
  image:
    'https://atlas-content-cdn.pixelsquid.com/stock-images/armchair-arm-chair-6360XZ2-600.jpg',
  price: 15,
  name: 'Product',
};

const data = [];
for (let i = 1; i <= 35; i++) {
  data.push({...dataCell, id: i, name: `${dataCell.name} ${i}`});
}

export const GET = (page = 0, perPage) =>
  new Promise((resolve, reject) => {
    if (page >= 0 && perPage > 0) {
      setTimeout(() => {
        resolve(data.slice(page * perPage, (page + 1) * perPage));
      }, 700);
    } else {
      reject('Error');
    }
  });
