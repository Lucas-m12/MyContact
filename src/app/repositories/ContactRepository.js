const { v4: uuid } = require('uuid');

let contacts = [
  {
    id: uuid(),
    name: 'Lucas',
    email: 'lucasmarinhodasilva2@gmail.com',
    phone: '82996513499',
    category_id: uuid(),
  },

  {
    id: uuid(),
    name: 'Mateus',
    email: 'mateus@gmail.com',
    phone: '82996513499',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: uuid(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);

      resolve(newContact);
    });
  }
}

module.exports = new ContactRepository();
