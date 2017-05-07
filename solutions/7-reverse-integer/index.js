/**
 * @param {number} x
 * @return {number}
 */
module.exports = function(x) {
	var sign = x < 0 ? '-' : 0;
	var s = String(x);
	var num = '';
	for (var i = 0, l = s.length; i < l; i++) {
		num += s.charAt(l - 1 - i);
	}

	var res = parseInt(sign + num);

	if (res < -0x7FFFFFFF || res > 0x7FFFFFFF) {
		res = 0;
	}

	return res;
};