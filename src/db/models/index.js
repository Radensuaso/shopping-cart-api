import Category from "./Category.js";
import Product from "./Product.js";

Product.belongsTo(Category, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});
Category.hasMany(Product, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

export default { Category, Product };
