/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	var i = 0;
	while (i < nums.length) {
		if (i > 1 && nums[i] == nums[i - 1] && nums[i] == nums[i - 2]) {
			nums.splice(i, 1);
			i--;
		}

		i++;
	}

	return nums.length;
};
