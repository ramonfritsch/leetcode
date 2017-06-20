/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	if (!s || !s.length) {
		return s === '';
	}

	s = s.replace(/[^a-z0-9]/ig, '').replace(/\s/ig, '').toLowerCase();

	return s == s.split('').reverse().join('');
};
