/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	var map = {};

	for (var i = 0, l = strs.length; i < l; i++) {
		var str = strs[i];
		var key = str.split('').sort().join('');

		if (!map[key]) {
			map[key] = [];
		}

		map[key].push(str);
	}

	var result = [];
	for (var k in map) {
		result.push(map[k]);
	}

	return result;
};

module.exports = groupAnagrams;
