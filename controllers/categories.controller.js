const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getAll: async (req, res) => {
    try {
      const categories = await Category.find();

      return res.json(categories);
    } catch (e) {
      return res.json(e.message);
    }
  },
  getCategoryById: async (req, res) => {
    const { id } = req.params;
    try {
      const categoryId = await Category.findById(id);

      return res.json(categoryId);
    } catch (e) {
      return res.json(e.message);
    }
  },
  createCategory: async (req, res) => {
    const { name } = req.body;
    try {
      const category = Category.create({ name });

      return res.json(category);
    } catch (e) {
      return res.json(e.message);
    }
  },
  editCategory: async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    try {
      const categoryEdit = await Category.findByIdAndUpdate(
        id,
        { name },
        { new: true }
      );

      return res.json(categoryEdit);
    } catch (e) {
      return res.json(e.message);
    }
  },
  deleteCategory: async (req, res) => {
    const { id } = req.params;
    try {
      const categoryDelete = await Category.findByIdAndDelete(id)

      return res.json(categoryDelete)
    }catch (e) {
      return res.json(e.message)
    }
  }
};
