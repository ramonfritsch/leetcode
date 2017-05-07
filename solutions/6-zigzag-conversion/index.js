/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
module.exports = function(s, numRows) {
	var down = true;
	var row = 0;
	var rows = [];
	for (var i = 0, l = s.length; i < l; i++) {
		if (!rows[row]) {
			rows[row] = '';
		}

		rows[row] += s.charAt(i);

		if (row >= (numRows - 1)) {
			down = false;
		} else if (row <= 0) {
			down = true;
		}

		if (down) {
			row++;
		} else {
			row--;
		}

		row = Math.max(0, Math.min(numRows - 1, row));
	}

	return rows.join('');
};