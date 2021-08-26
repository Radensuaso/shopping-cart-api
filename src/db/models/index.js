import Category from "./Category.js";
import Product from "./Product.js";
import User from "./User.js";
import Review from "./Review.js";
import Cart from "./Cart.js";

Product.belongsTo(Category, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});
Category.hasMany(Product, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

export default { Category, Product, User, Review, Cart };
