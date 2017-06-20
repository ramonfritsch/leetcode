/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
	if (!matrix || !matrix.length || !matrix[0].length) {
		return [];
	}

	var direction = 1;
	var x = 0;
	var y = 0;
	var minX = 0;
	var minY = 0;
	var maxX = matrix[0].length - 1;
	var maxY = matrix.length - 1;
	var i = matrix.length * matrix[0].length;
	var result = [];

	while (--i >= 0) {
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

		result.push(matrix[y][x]);

		if (direction == 1) {
			x++;
		} else if (direction == 2) {
			y++
		} else if (direction == 3) {
			x--;
		} else if (direction == 4) {
			y--;
		}
	}

	return result;
};
