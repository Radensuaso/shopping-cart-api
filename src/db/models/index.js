import Category from "./Category.js";
import Product from "./Product.js";
import sequelize from "../index.js";

Product.belongsTo(Category);
Category.hasMany(Product);

export default { Category, Product, sequelize };
