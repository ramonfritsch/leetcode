/**
 * @param {string} s
 * @return {number}
 */
module.exports = function(s) {
	var dict = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	};

	if (!s.length) {
		return 0;
	}

	var sum = dict[s[s.length - 1]];
	for (var i = s.length - 2; i >= 0; i--) {
		var c = s.charAt(i);
		var cc = dict[c];
		if (cc < dict[s.charAt(i + 1)]) {
			sum -= cc;
		} else {
			sum += cc;
		}
	}

	return sum;
};