/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
module.exports = function(nums, target) {
	if (!nums && nums.length < 3) {
		return 0;
	}

	var closestSum = null;
	var l = nums.length;

	nums.sort(function (a, b) {
		return a - b;
	});

	for (var i = 0; i < l; i++) {
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}

		var j = i + 1;
		var k = l - 1;
		var sum = null;
		while (j < k) {
			sum = nums[i] + nums[j] + nums[k];

			if (sum == target) {
				return target;
			} else if (sum < target) {
				j++;
			} else if (sum > target) {
				k--;
			}

			if (closestSum === null || Math.abs(sum - target) < Math.abs(closestSum - target)) {
				closestSum = sum;
			}
		}
	}

	return closestSum === null ? 0 : closestSum;
};
