/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	if (!nums.length) {
		return 0;
	}

	var arr = [];
	var sum = nums[0];
	var maxSum = sum;

	for (var i = 1, l = nums.length; i < l; i++) {
		sum = nums[i] + (sum > 0 ? sum : 0);

		if (sum > maxSum) {
			maxSum = sum;
		}
	}

	return maxSum;
};

module.exports = maxSubArray;
