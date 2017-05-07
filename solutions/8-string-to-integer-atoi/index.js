/**
 * @param {string} str
 * @return {number}
 */
module.exports = function(str) {
	if (!str || !str.length || typeof str != 'string') {
		return 0;
	}

	var c, cc;
	var filtered = '';
	var started = false;
	var neg = false;
	var pos = false;
	var num = 0;

	for (var i = 0, l = str.length; i < l; i++) {
		c = str.charAt(i);
		cc = str.charCodeAt(i);

		if (cc >= 48 && cc <= 57) {
			started = true;
			filtered += c;
		} else if (c == '-' && !neg && !started) {
			neg = true;
			started = true;
		} else if (c == '+' && !pos && !started) {
			pos = true;
			started = true;
		} else if (!(c == ' ' && !started)) {
			break;
		}
	}

	if (!filtered.length) {
		return 0;
	}

	for (var j = 0, l2 = filtered.length; j < l2; j++) {
		cc = filtered.charCodeAt(j);
		num += (cc - 48) * Math.pow(10, l2 - j - 1);
	}

	num = Math.min(Math.max(num * (neg ? -1 : 1), -0x80000000), 0x7FFFFFFF);

	return num;

};