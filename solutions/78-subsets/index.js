/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	var result = [[]];

	for (var i = 0, l = nums.length; i < l; i++) {
		var n = result.length;
		for (var j = 0; j < n; j++) {
			var sub = [].concat(result[j]);
			sub.push(nums[i])
			result.push(sub);
		}
	}

	return result;
};
