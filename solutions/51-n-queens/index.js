/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	var board = [];
	var results = [];

	for (var i = 0; i < n; i++) {
		board.push([]);

		for (var j = 0; j < n; j++) {
			board[i].push('.');
		}
	}

	dfs(board, 0, results);

	return results;
};

var dfs = function (board, col, results) {
	if (col === board.length) {
		results.push(create(board));
		return;
	}

	for (var i = 0; i < board.length; i++) {
		if (validate(board, i, col)) {
			board[i][col] = 'Q';
			dfs(board, col + 1, results);
			board[i][col] = '.';
		}
	}
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

var create = function (board) {
	var result = [];
	for (var i = 0; i < board.length; i++) {
		result.push(board[i].join(''));
	}

	return result;
};
