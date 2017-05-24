/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	var result = '1';

	for (var i = 1; i < n; i++) {
		var count = 0;
		var current = null;
		var buffer = '';

		for (var j = 0, l = result.length; j <= l; j++) {
			var c = j < l ? result[j] : null;

			if (current === null) {
				current = c;
			}

			if (current == c) {
				count++;
			} else {
				buffer += count + current;
				current = c;
				count = 1;
			}
		}

		result = buffer;
	}

	return result;
};
