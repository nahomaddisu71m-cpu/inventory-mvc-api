let products = [
  { id: 1, name: "Laptop", categoryId: 1, supplierId: 1, price: 1200, stock: 50, createdAt: new Date() },
  { id: 2, name: "Wireless Mouse", categoryId: 2, supplierId: 2, price: 25, stock: 200, createdAt: new Date() }
];

let nextId = 3;

class Product {
  static getAll() {
    return products;
  }

  static getById(id) {
    return products.find(p => p.id === parseInt(id));
  }

  static create(data) {
    const newProduct = {
      id: nextId++,
      ...data,
      createdAt: new Date()
    };
    products.push(newProduct);
    return newProduct;
  }

  static update(id, updatedData) {
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index === -1) return null;

    products[index] = { ...products[index], ...updatedData };
    return products[index];
  }

  static delete(id) {
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index === -1) return null;
    return products.splice(index, 1)[0];
  }
}

export default Product;
