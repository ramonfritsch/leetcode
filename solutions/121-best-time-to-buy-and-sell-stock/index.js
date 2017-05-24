/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if (!prices || !prices.length) {
		return 0;
	}

	var min = prices[0];
	var max = prices[0];
	var maxProfit = 0;

	for (var i = 1, l = prices.length; i < l; i++) {
		if (prices[i] < min) {
			min = prices[i];
			max = min;
		} else if (prices[i] > max) {
			max = prices[i];

			maxProfit = Math.max(maxProfit, max - min);
		}
	}

	return maxProfit;
};

module.exports = maxProfit;
