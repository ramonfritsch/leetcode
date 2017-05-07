/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
module.exports = function(l1, l2) {
	var curr = new ListNode(0);
	var head = curr;
	var sum = 0;
	while (l1 !== null || l2 !== null) {
		curr.val = (l1 !== null ? l1.val : 0) + (l2 !== null ? l2.val : 0) + sum;

		sum = parseInt(curr.val / 10);
		curr.val %= 10;

		if (l1 !== null) {
			l1 = l1.next;
		}

		if (l2 !== null) {
			l2 = l2.next;
		}

		if (l1 !== null || l2 !== null || sum > 0) {
			var next = new ListNode(0);
			curr.next = next;
			curr = next;

			if (sum > 0) {
				curr.val = sum;
			}
		}
	}

	return head;
};