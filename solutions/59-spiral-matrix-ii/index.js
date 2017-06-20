/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
	if (!n) {
		return [];
	}

	var result = [];

	for (var y = 0; y < n; y++) {
		result.push(new Array(n));
	}

	var direction = 1;
	var x = 0;
	var y = 0;
	var minX = 0;
	var minY = 0;
	var maxX = n - 1;
	var maxY = maxX;
	var l = n * n;
	var i = 0;

	while (i < l) {
		if (direction == 1 && x >= maxX) {
			x = maxX;
			direction = 2;
			minY++;
		} else if (direction == 2 && y >= maxY) {
			y = maxY;
			direction = 3;
			maxX--;
		} else if (direction == 3 && x <= minX) {
			x = minX;
			direction = 4;
			maxY--;
		} else if (direction == 4 && y <= minY) {
			y = minY;
			direction = 1;
			minX++;
		}

		result[y][x] = i + 1;

		if (direction == 1) {
			x++;
		} else if (direction == 2) {
			y++
		} else if (direction == 3) {
			x--;
		} else if (direction == 4) {
			y--;
		}

		i++;
	}

	return result;
};
