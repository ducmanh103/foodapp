export const products = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Beef patty with cheese, lettuce, and tomato.",
    price: 5.99,
    image: require('../assets/images/cheeseburger.png'), // Using existing image for mockup
    categoryId: 2
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Large size pizza with extra pepperoni.",
    price: 12.99,
    image: require('../assets/images/pizza.png'),
    categoryId: 1
  },
  {
    id: 3,
    name: "Coca Cola",
    description: "Cold refreshing drink.",
    price: 1.99,
    image: require('../assets/images/coca.png'),
    categoryId: 3
  },
  {
    id: 4,
    name: "Chicken Burger",
    description: "Crispy chicken with mayo and lettuce.",
    price: 6.49,
    image: require('../assets/images/chicken.png'),
    categoryId: 2
  },
  {
    id: 5,
    name: "Fried Rice",
    description: "Asian style fried rice with vegetables.",
    price: 8.99,
    image: require('../assets/images/rice.png'),
    categoryId: 4
  }
];
