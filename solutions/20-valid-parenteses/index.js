/**
 * @param {string} s
 * @return {boolean}
 */
var chars = {
		'(': ')',
		'[': ']',
		'{': '}'
	};
var isValid = function(s) {
	var stack = [];

	for (var i = 0, l = s.length; i < l; i++) {
		var c = s[i];

		if (chars[c]) {
			stack.push(chars[c]);
		} else if (c === stack[stack.length - 1]) {
			stack.pop();
		} else {
			return false;
		}
	}

	return stack.length === 0;
};
