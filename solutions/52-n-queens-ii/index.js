/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
	var board = [];
	var results = 0;

	for (var i = 0; i < n; i++) {
		board.push([]);

		for (var j = 0; j < n; j++) {
			board[i].push('.');
		}
	}

	results = dfs(board, 0, results);

	return results;
};

var dfs = function (board, col, results) {
	if (col === board.length) {
		return results + 1;
	}

	for (var i = 0; i < board.length; i++) {
		if (validate(board, i, col)) {
			board[i][col] = 'Q';
			results = dfs(board, col + 1, results);
			board[i][col] = '.';
		}
	}

	return results;

};

var validate = function (board, x, y) {
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < y; j++) {
			if (board[i][j] == 'Q' && (x + j == y + i || x + y == i + j || x == i)) {
				return false;
			}
		}
	}

	return true;
};
