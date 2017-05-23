/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (!strs || strs.length === 0) {
		return '';
	}

	var prefix = strs[0];
	var prefixLen = prefix.length;
	for (var j = 1, l = strs.length; j < l; j++) {
		var str = strs[j];
		if (str.length > prefixLen) {
			str = str.substring(0, prefixLen);
		}

		while (str.indexOf(prefix) !== 0) {
			prefixLen -= 1;
			prefix = prefix.substring(0, prefixLen);

			if (prefix.length === 0) {
				return '';
			}
		}
	}

	return prefix;
};
