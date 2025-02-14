module.exports = (sequelize, DataTypes) => {
	let alias = "Product";

	let columns = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			unique: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		country_id: {
			type: DataTypes.INTEGER,
			unsigned: true,
		},
		grapes_id: {
			type: DataTypes.INTEGER,
			unsigned: true,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
			unsigned: true,
		},
		discount: {
			type: DataTypes.INTEGER,
		},
		description: {
			type: DataTypes.TEXT,
		},
		stock: {
			type: DataTypes.INTEGER,
			unsigned: true,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	};

	let config = {
		tableName: "products",
		timestamps: false,
	};

	let Product = sequelize.define(alias, columns, config);

	Product.associate = function (models) {
		Product.belongsTo(models.Grape, {
			as: "grapes",
			foreignKey: "grapes_id",
		});

		Product.belongsTo(models.Country, {
			as: "countries",
			foreignKey: "country_id",
		});
	};

	return Product;
};
