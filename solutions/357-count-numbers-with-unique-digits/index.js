/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
	if (n === 0) {
		return 1;
	}

	var result = 10;
	var available = 9;
	var mult = 9;

	while (--n > 0 && available > 0) {
		mult *= available--;
		result += mult;
	}

	return result;
};
