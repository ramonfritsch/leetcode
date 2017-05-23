/**
 * @param {character[][]} board
 * @return {boolean}
 */
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
module.exports = function(board) {
	//Check lines
	for (var y = 0; y < 9; y++) {
		var tmp = [].concat(nums);

		for (var x = 0; x < 9; x++) {
			var n = board[y][x];

			if (n == '.') {
				continue;
			}

			var index = tmp.indexOf(n);
			if (index === -1) {
				return false;
			}

			tmp.splice(index, 1);
		}
	}

	//Check columns
	for (var x = 0; x < 9; x++) {
		var tmp = [].concat(nums);

		for (var y = 0; y < 9; y++) {
			var n = board[y][x];

			if (n == '.') {
				continue;
			}

			var index = tmp.indexOf(n);
			if (index === -1) {
				return false;
			}

			tmp.splice(index, 1);
		}
	}

	//Check quadrants
	for (var q = 0; q < 9; q++) {
		var startX = (q % 3) * 3;
		var endX = startX + 3;
		var startY = Math.floor(q / 3) * 3;
		var endY = startY + 3;

		var tmp = [].concat(nums);

		for (var x = startX; x < endX; x++) {
			for (var y = startY; y < endY; y++) {
				var n = board[y][x];

				if (n == '.') {
					continue;
				}

				var index = tmp.indexOf(n);
				if (index === -1) {
					return false;
				}

				tmp.splice(index, 1);
			}
		}
	}

	return true;
};