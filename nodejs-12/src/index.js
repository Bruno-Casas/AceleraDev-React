const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function filterProducts(product) {
	return this.ids.includes(product.id);
}

function regularizeProducts({ name, category }) {
	return { name, category };
}

function getPromotion() {
	const listedCategories = [];

	return (promotion, cur) => {

		if (!listedCategories.includes(cur.category)) {
			listedCategories.push(cur.category);
			promotion = promotions[listedCategories.length - 1];
		}
		return promotion;
	}
};

function chartPriceInfo(products, look) {

	return {
		regularPrice: function () {
			return products.reduce((acc, { regularPrice }) =>
				acc + regularPrice, 0);
		},
		totalPrice: function () {
			return this.regularPrice() - this.discountValue();
		},
		discountValue: function () {
			return products.reduce((acc, { promotions, regularPrice }) => {
				const [validPromotion] = promotions
					.filter(({ looks }) => looks.includes(look))

				if (validPromotion)
					acc += regularPrice - validPromotion.price;

				return acc;
			}, 0)
		},

		discount: function () {
			return (100 * this.discountValue() / this.regularPrice());
		}
	}
}

function getShoppingCart(ids, productsList) {
	const products = productsList.filter(filterProducts, { ids });
	const promotion = products.reduce(getPromotion(), '');
	const priceInfo = chartPriceInfo(products, promotion);
	return {
		products: products.map(regularizeProducts),
		promotion,
		totalPrice: priceInfo.totalPrice().toFixed(2),
		discountValue: priceInfo.discountValue().toFixed(2),
		discount: `${priceInfo.discount().toFixed(2)}%`
	}
}

module.exports = { getShoppingCart };
