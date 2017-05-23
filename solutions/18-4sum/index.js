/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	if (!nums || nums.length < 4) {
		return [];
	}

	var r = [];
	var l = nums.length;

	nums.sort(function (a, b) {
		return a - b;
	});

	for (var i = 0; i < l - 3; i++) {
		var numi = nums[i];

		if (i > 0 && numi == nums[i - 1]) {
			continue;
		}

		if ((numi + nums[i + 1] + nums[i + 2] + nums[i + 3]) > target) {
			break;
		}

		if ((numi + nums[l - 3] + nums[l - 2] + nums[l - 1]) < target) {
			continue;
		}

		for (var j = i + 1; j < l - 2; j++) {
			var numj = nums[j];

			if (j > i + 1 && numj == nums[j - 1]) {
				continue;
			}

			if ((numi + numj + nums[j + 1] + nums[j + 2]) > target) {
				break;
			}

			if ((numi + numj + nums[l - 2] + nums[l - 1]) < target) {
				continue;
			}

			var left = j + 1;
			var right = l - 1;
			while (left < right) {
				var sum = numi + numj + nums[left] + nums[right];

				if (sum < target) {
					left++;
				} else if (sum > target) {
					right--;
				} else {
					r.push([numi, numj, nums[left], nums[right]]);

					while (nums[left] == nums[++left] && left < right);
					while (nums[right--] == nums[right] && left < right);
				}
			}
		}
	}

	return r;
};
