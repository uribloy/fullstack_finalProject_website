require("dotenv/config");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { User } = require("../models/userSchema");
const { Product } = require("../models/productSchema");
const { Order } = require("../models/orderSchema");
const { usersData, productsData } = require("./dbSeederData");
const config = require("config");
const chalk = require("chalk");

mongoose
  .connect(config.get("mongoDB.MONGO_URI"))
  .then(() => console.log(chalk.blue("connected to db successfully")))
  .then(seed)
  .then(() => mongoose.connection.close())
  .catch((err) => console.log(chalk.red(`could not connect to db: ${err}`)));

async function seed() {
  await User.deleteMany();
  await Product.deleteMany();
  await Order.deleteMany();

  for (let i = 0; i < usersData.length; i++) {
    await seedUser(usersData[i]);
  }
  for (let i = 0; i < productsData.length; i++) {
    await seedProduct(productsData[i]);
  }

  console.log(
    chalk.black.bgWhiteBright(
      "Seeding Complete. Run 'npm run start/dev' to start the application..."
    )
  );
}
async function seedUser(userData) {
  const user = await new User({
    ...userData,
    "password": await bcrypt.hash(userData.password, 12),
  }).save();

  console.log(chalk.white.bgBlue(`New User: ${userData.email}`));

  return user;
}
async function seedProduct(productData) {
  const product = await new Product({
    ...productData,
  }).save();

  console.log(chalk.white.bgGreen(`New Product: ${productData.title}`));

  return product;
}
