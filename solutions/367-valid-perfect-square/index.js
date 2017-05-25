/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
	if (num === 0) {
		return 0;
	}

	var left = 1;
	var right = Number.MAX_SAFE_INTEGER;
	var mid;
	var sqrt = 0;
	while (true) {
		mid = left + (right - left) / 2;

		if (mid > (num / mid)) {
			right = mid - 1;
		} else {
			if ((mid + 1) > (num / (mid + 1))) {
				sqrt = mid;
				break;
			}

			left = mid + 1;
		}
	}

	return (sqrt * sqrt) === num;
};

module.exports = isPerfectSquare;
