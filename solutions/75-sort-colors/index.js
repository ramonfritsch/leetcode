/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	for (var i = 0; i < nums.length; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if (nums[i] > nums[j]) {
				var tmp = nums[i];
				nums[i] = nums[j];
				nums[j] = tmp;
			}
		}
	}
};
