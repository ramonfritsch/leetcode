/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if (!prices || !prices.length) {
		return 0;
	}

	var profit = 0;
	var currMin = prices[0];
	var currProfit = 0;

	for (var i = 1, l = prices.length; i < l; i++) {
		if (prices[i - 1] <= prices[i]) {
			currProfit = prices[i] - currMin;
		} else {
			profit += currProfit;

			currMin = prices[i];
			currProfit = 0;
		}
	}

	profit += currProfit;

	return profit;
};

module.exports = maxProfit;
