/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
	var len = s.length;
	var entries = [];

	for (var a = 1; a < 4; a++) {
		for (var b = 1; b < 4; b++) {
			for (var c = 1; c < 4; c++) {
				for (var d = 1; d < 4; d++) {
					if (a + b + c + d === len) {
						ai = parseInt(s.substr(0, a));
						bi = parseInt(s.substr(a, b));
						ci = parseInt(s.substr(a + b, c));
						di = parseInt(s.substr(a + b + c, d));

						if (ai < 256 && bi < 256 && ci < 256 && di < 256) {
							var entry = [ai, bi, ci, di].join('.');
							if (entry.length === len + 3) {
								entries.push(entry);
							}
						}
					}
				}
			}
		}
	}

	return entries;
};
