/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = function(nums, target) {
	var indexes = [];
	var l = nums.length;
	for (var i = 0; i < l; i++) {
		for (var j = i+1; j < l; j++) {
			if (nums[i] + nums[j] == target) {
				return [ i, j ];
			}
		}
	}

	return false;
};