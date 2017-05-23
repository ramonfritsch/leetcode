/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	if (!nums || nums.length < 3) {
		return [];
	}

	var r = [];
	var l = nums.length;

	nums.sort(function (a, b) {
		return a - b;
	});

	for (var i = 0; i < l - 2;) {
		var numi = nums[i];
		if (numi > 0) {
			break;
		}

		var j = i + 1;
		var k = l - 1;
		while (j < k) {
			var sum = numi + nums[j] + nums[k];

			if (sum == 0) {
				r.push([numi, nums[j], nums[k]]);
			}

			if (sum <= 0) {
				while (nums[j] == nums[++j] && j < k);
			}

			if (sum >= 0) {
				while (nums[k--] == nums[k] && j < k);
			}
		}

		while (nums[i] == nums[++i] && i < l - 2);
	}

	return r;
};
