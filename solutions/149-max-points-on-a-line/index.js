/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
module.exports = function (points) {
	if (!points || points.length === 0) {
		return 0;
	}

	var l = points.length;
	var max = 1;
	var a, b, gcd, slope, p, p2, samePoint, localMax, slopes;
	for (var i = 0; i < l; i++) {
		if (l - i < max) {
			break;
		}

		p = points[i];
		samePoint = 1;
		localMax = 0;
		slopes = {};

		for (var j = i + 1; j < l; j++) {
			p2 = points[j];

			if (p.x == p2.x && p.y == p2.y) {
				samePoint++;
			} else {
				a = p.y - p2.y;
				b = p.x - p2.x;
				gcd = GCD(a, b);

				a /= gcd;
				b /= gcd;

				slope = String(a) + ',' + String(b);

				if (!slopes[slope]) {
					slopes[slope] = 1;
				} else {
					slopes[slope]++;
				}

				var slopeCount = slopes[slope];
				localMax = slopeCount > localMax ? slopeCount : localMax;
			}
		}

		localMax += samePoint;

		max = localMax > max ? localMax : max;
	}

	return max;
};

var GCD = function (a, b) {
	if (b === 0) {
		return a;
	}

	return GCD(b, a % b);
};