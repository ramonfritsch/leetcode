/**
 * @param {number} num
 * @return {string}
 */
module.exports = function(num) {
	var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var numbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	var str = '';

	for (var i = 0, l = values.length; i < l; i++) {
		var value = values[i];
		var number = numbers[i];

		while (num >= value) {
			num -= value;
			str += number;
		}
	}

	return str;
};