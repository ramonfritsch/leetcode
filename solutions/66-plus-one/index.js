/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	var l = digits.length - 1;

	for (var i = l; i >= 0; i--) {
		digits[i]++;

		if (digits[i] > 9) {
			digits[i] = 0;

			if (i == 0) {
				return [1].concat(digits);
			}
		} else {
			break;
		}
	}

	return digits;
};

module.exports = plusOne;
