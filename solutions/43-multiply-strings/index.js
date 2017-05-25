/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	if (num2.length > num1.length) {
		var tmp = num1;
		num1 = num2;
		num2 = tmp;
	}

	var mult = 1;
	var result = [];
	num1 = num1.split('').reverse();
	num2 = num2.split('').reverse();

	for (var i = 0, l = num1.length + num2.length + 1; i < l; i++) {
		if (i < num1.length) {
			num1[i] = parseInt(num1[i]);
		}

		result.push(0);
	}

	for (var i = 0; i < num2.length; i++) {
		var n2 = parseInt(num2[i]);
		var carry = 0;

		for (var j = 0, l = num1.length; j < l; j++) {
			var r = result[i + j] + num1[j] * n2 + carry;

			carry = Math.floor(r / 10);
			result[i + j] = r % 10;
		}
		result[i + j] = carry;
	}

	//remove leading 0
	result = result.reverse();
	var i = 0;
	while (i < result.length && result[i++] === 0);

	i -= 1;

	if (i > 0) {
		result = result.slice(i);
	}

	return result.join('');
};

module.exports = multiply;
