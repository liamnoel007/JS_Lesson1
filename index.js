let budget = prompt('Ваш бюджет?');
let shopName = prompt('Название Вашего магазина?');

let mainList = {
  budget,
  shopName,
  shopGoods: [],
  employers: {
    firstName: 'Ахмед',
  },
  isOpen: false,
};

mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[3] = prompt('Какой тип товаров будем продавать?');

alert(`Бюджет магазина на 1 день равен: ${mainList.budget / 30} руб.`);
