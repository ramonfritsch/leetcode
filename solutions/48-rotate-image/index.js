/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

	//Not very in place but faster
	// var len = matrix.length - 1;
	// for (var j = 0; j <= len; j++) {
	// 	for (var i = len; i >= 0; i--) {
	// 		matrix[j].push(matrix[i].shift());
	// 	}
	// }

	var len = matrix.length;

	//flip vertically
	for (var y = 0, l = Math.floor(len / 2); y < l; y++) {
		for (var x = 0; x < len; x++) {
			var tmp = matrix[y][x];
			matrix[y][x] = matrix[len - 1 - y][x];
			matrix[len - 1 - y][x] = tmp;
		}
	}

	//transpose
	for (var x = 0; x < len; x++) {
		for (var y = 0; y < x; y++) {
			var tmp = matrix[y][x];
			matrix[y][x] = matrix[x][y];
			matrix[x][y] = tmp;
		}
	}
};

module.exports = rotate;
