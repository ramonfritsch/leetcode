/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	if (b.length > a.length) {
		var tmp = a;
		a = b;
		b = tmp;
	}

	var result = [];
	var carry = 0;
	var j = b.length - 1;

	for (var i = a.length - 1; i >= 0; i--) {
		if (j >= 0) {
			result.push(parseInt(a[i]) + parseInt(b[j]) + carry);
		} else {
			result.push(parseInt(a[i]) + carry);
		}

		if (carry > 0) {
			carry--;
		}

		if (result[result.length - 1] >= 2) {
			result[result.length - 1] = result[result.length - 1] - 2;
			carry++;
		}

		j--;
	}

	if (carry > 0) {
		result.push(carry);
	}

	return result.reverse().join('');
};

module.exports = addBinary;
