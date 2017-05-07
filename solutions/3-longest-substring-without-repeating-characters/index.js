/**
 * @param {string} s
 * @return {number}
 */
module.exports = function(s) {
	var l = s.length;
	if (!l) {
		return 0;
	}

	var buff = '';
	var max = 0;

	for (var i = 0; i < l; i++) {
		var c = s.charAt(i);
		var idx = buff.indexOf(c);

		if (idx > -1) {
			var len = (buff.length - idx - 1);
			if (len > 0) {
				buff = buff.substr(len * -1);
			} else {
				buff = '';
			}
		}

		buff += c;

		max = Math.max(max, buff.length);
	}

	return max;
};