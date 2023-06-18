const express = require("express");
const sequelize = require("./config/connection");
const { Category, Product, Tag } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/categories", require("./routes/api/category-routes"));
app.use("/api/products", require("./routes/api/product-routes"));
app.use("/api/tags", require("./routes/api/tag-routes"));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});
