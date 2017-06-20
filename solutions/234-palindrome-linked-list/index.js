/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	var slow = head;
	var fast = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
	}

	if (fast) {
		slow = slow.next;
	}

	slow = reverse(slow);
	fast = head;

	while (slow) {
		if (fast.val != slow.val) {
			return false;
		}

		fast = fast.next;
		slow = slow.next;
	}

	return true;
};

var reverse = function (head) {
	var prev = null;

	while (head) {
		var next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}

	return prev;
}
