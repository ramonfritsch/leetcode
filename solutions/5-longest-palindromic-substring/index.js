/**
 * @param {string} s
 * @return {string}
 */
module.exports = function(s) {
	var maxLen = 0;
	var maxPos = 0;
	var len = s.length;

	function extend(j, k) {
		while (j >= 0 && k < len && s.charAt(j) == s.charAt(k)) {
			j--;
			k++;
		}

		var strLen = k - j - 1;

		if (maxLen <= strLen) {
			maxLen = strLen;
			maxPos = j + 1;
		}
	}

	for (var i = 0; i < len; i++) {
		extend(i, i); //odd
		extend(i, i+1); //even
	}

	return s.substr(maxPos, maxLen);
};