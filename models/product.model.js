const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const dbPath = require('path').join(__dirname, '../db.json');
const adapter = new FileSync(dbPath);
const db = low(adapter);

module.exports = {
  // Methods for products
  getAll() {
    return db.get('products').value();
  },
  getById(id) {
    return db.get('products').find({ id: parseInt(id) }).value();
  },
  create(product) {
    return db.get('products').push(product).write();
  },
  update(id, updated) {
    const product = db.get('products').find({ id: parseInt(id) }).assign(updated).write();
    return product ? product.value() : null;
  },
  delete(id) {
    return db.get('products').remove({ id: parseInt(id) }).write();
  },

  // Methods for categories
  getAllCategories() {
    return db.get('categories').value();
  },

  // Enhanced getProducts with filtering
  getProductsWithFilters(params) {
    let query = db.get('products');

    // Filter by category_id
    if (params.category_id) {
      query = query.filter({ category_id: parseInt(params.category_id) });
    }

    // Filter by price range
    if (params.fromPrice) {
      query = query.filter((p) => p.price >= parseInt(params.fromPrice));
    }
    if (params.toPrice) {
      query = query.filter((p) => p.price <= parseInt(params.toPrice));
    }

    // Filter by rating
    if (params.rating) {
      query = query.filter((p) => p.rating >= parseInt(params.rating));
    }

    // Sort by
    if (params.sortBy) {
      const [field, order] = params.sortBy.split(':');
      if (field === 'price' || field === 'sold' || field === 'rating') {
        query = query.orderBy(field, order === 'desc' ? 'desc' : 'asc');
      }
    }

    // Pagination
    const page = parseInt(params.page) || 1;
    const limit = parseInt(params.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedProducts = query.slice(startIndex, endIndex).value();
    const totalProducts = query.size().value();

    return {
      data: paginatedProducts,
      totalPages: Math.ceil(totalProducts / limit),
    };
  },
};