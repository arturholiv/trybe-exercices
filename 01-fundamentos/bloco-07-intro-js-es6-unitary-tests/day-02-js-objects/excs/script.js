const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entregar para ${order["name"]}, Telefone ${order.phoneNumber}, Rua ${order.address.street}, Nº:${order.address.number}, Apto: ${order.address.apartment}`,)
}

customerInfo(order);

const orderModifier = (order) => {
  const pizzas = Object.keys(order.order.pizza);
  const buyer = order.name = 'Artur';
  const price = order.payment.total = 70
  console.log(`Olá ${buyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$${price},00.`)
}

orderModifier(order);

