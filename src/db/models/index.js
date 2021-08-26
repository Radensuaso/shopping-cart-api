import Category from "./Category.js";
import Product from "./Product.js";
import User from "./User.js";
import Review from "./Review.js";
import Cart from "./Cart.js";

//============== Relationship between Product and category ==============
Category.hasMany(Product, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});
Product.belongsTo(Category, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

//============== Relationship between Product User and Cart ==============
Product.belongsToMany(User, {
  through: { model: Cart, unique: false },
});
User.belongsToMany(Product, {
  through: { model: Cart, unique: false },
}); //unique: false => to prevent creating primary key

Product.hasMany(Cart); // Product.findAll({include: Cart})
Cart.belongsTo(Product); // Cart.findAll({include: Product})

User.hasMany(Cart); // User.findAll({include: Cart})
Cart.belongsTo(User); // Cart.findAll({include: User})

//================= Relationship between Product, Reviews and Users ==============
Product.hasMany(Review, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});
Review.belongsTo(Product, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

User.hasMany(Review, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});
Review.belongsTo(User, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

export default { Category, Product, User, Review, Cart };
