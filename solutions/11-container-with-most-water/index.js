/**
 * @param {number[]} height
 * @return {number}
 */
module.exports = function(height) {
	var i = 0;
	var j = height.length - 1;
	var water = 0;
	while (i < j) {
		water = Math.max(water, (j - i) * Math.min(height[i], height[j]));
		if (height[i] < height[j]) {
			i++
		} else {
			j--;
		}
	}

	return water;
};