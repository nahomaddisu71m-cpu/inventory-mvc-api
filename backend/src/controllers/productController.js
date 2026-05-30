import Product from '../models/Product.js';

export const getAllProducts = (req, res) => {
  const products = Product.getAll();
    res.json(products);
    };

    export const getProductById = (req, res) => {
      const product = Product.getById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
          res.json(product);
          };

          export const createProduct = (req, res) => {
            const { name, categoryId, supplierId, price, stock } = req.body;

              if (!name || !categoryId || !supplierId || !price) {
                  return res.status(400).json({ message: "Name, categoryId, supplierId and price are required" });
                    }

                      const newProduct = Product.create({
                          name,
                              categoryId: parseInt(categoryId),
                                  supplierId: parseInt(supplierId),
                                      price: parseFloat(price),
                                          stock: parseInt(stock) || 0
                                            });

                                              res.status(201).json(newProduct);
                                              };

                                              export const updateProduct = (req, res) => {
                                                const updated = Product.update(req.params.id, req.body);
                                                  if (!updated) return res.status(404).json({ message: "Product not found" });
                                                    res.json(updated);
                                                    };

                                                    export const deleteProduct = (req, res) => {
                                                      const deleted = Product.delete(req.params.id);
                                                        if (!deleted) return res.status(404).json({ message: "Product not found" });
                                                          res.json({ message: "Product deleted successfully", product: deleted });
                                                          };
