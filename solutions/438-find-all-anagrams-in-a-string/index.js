/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
	var results = [];

	if (!s || !s.length || !p || !p.length) {
		return results;
	}

	var sLength = s.length;
	var pLength = p.length;
	var map = {};

	for (var i = 0; i < pLength; i++) {
		map[p[i]] = !map[p[i]] ? 1 : map[p[i]] + 1;
	}

	var count = pLength;
	var left = 0;
	var right = 0;
	while (right < sLength) {
		if (map[s[right++]]-- >= 1) {
			count--;
		}

		if (count === 0) {
			results.push(left);
		}

		if (right - left == pLength && map[s[left++]]++ >= 0) {
			count++;
		}
	}

	return results;
};

module.exports = findAnagrams;
