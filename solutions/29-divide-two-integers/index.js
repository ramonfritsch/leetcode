/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var MAX_INT = 0x7FFFFFFF;
var MIN_INT = -0x80000000;
module.exports = function(dividend, divisor) {
	if (dividend == 0 || divisor === 0) {
		return 0;
	} else if (dividend <= MIN_INT && divisor == -1) {
		return MAX_INT;
	}

	var negative = ((dividend < 0) ^ (divisor < 0));
	var r = 0;

	dividend = Math.abs(dividend);
	divisor = Math.abs(divisor);

	var mult = 1;
	var sub = divisor;
	while (dividend >= divisor) {
		var mult = 1;
		var div = divisor;

		while (div <= (dividend >> 1)) {
			div <<= 1;
			mult <<= 1;
		}

		r += mult;
		dividend -= div;
	}

	return negative ? -r : r;
};


