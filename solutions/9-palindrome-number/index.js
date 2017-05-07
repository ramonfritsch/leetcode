/**
 * @param {number} x
 * @return {boolean}
 */
module.exports = function(x) {
	x = String(x).split(' ').join('');
	return x == x.split('').reverse().join('');
};