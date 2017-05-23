/**
 * @param {string} digits
 * @return {string[]}
 */
var digitsMap = {
	1: ['*'],
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z']
};

var letterCombinations = function(digits) {
	var combinations = [];

	if (!digits || !digits.length) {
		return combinations;
	}

	var numbers = [];

	for (var i = 0, l = digits.length; i < l; i++) {
		var chars = digitsMap[digits[i]];
		if (chars.length) {
			numbers.push(chars);
		}
	}

	var numbersLength = numbers.length;

	var add = function (buffer, depth) {
		if (depth == numbersLength) {
			combinations.push(buffer);
		} else {
			var chars = numbers[depth];
			for (var i = 0, l = chars.length; i < l; i++) {
				add(buffer + chars[i], depth + 1);
			}
		}
	};

	add('', 0);

	return combinations;
};
