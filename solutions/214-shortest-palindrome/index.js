/**
 * @param {string} s
 * @return {string}
 */
module.exports = function(s) {
	var j = 0;
	var l = s.length;
	for (var i = l - 1; i >= 0; i--) {
		if (s.charAt(i) == s.charAt(j)) { j += 1; }
	}
	if (j == l) { return s; }
	var suffix = s.substr(j);
	return suffix.split('').reverse().join('') + shortestPalindrome(s.substr(0, j)) + suffix;
};