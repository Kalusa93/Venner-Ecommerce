module.exports = (sequelize, DataTypes) => {
	let alias = "Cart";

	let columns = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			unique: true,
			autoIncrement: true,
		},
        id_user: {
            type: DataTypes.INTEGER,
        },
		id_products_cart: {
			type: DataTypes.INTEGER
		},
		total: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	};

	let config = {
		tableName: "shopping_carts",
		timestamps: false,
	};

	let Cart = sequelize.define(alias, columns, config);

	return Cart;
};
