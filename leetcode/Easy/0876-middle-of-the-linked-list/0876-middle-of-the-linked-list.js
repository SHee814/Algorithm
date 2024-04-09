/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let size = 0;
    let currentNode = head;

    while (currentNode) {
        size++;
        currentNode = currentNode.next;
    }

    const mid = Math.floor(size / 2);
    let answer = head;

    console.log(mid);

    for (let i = 1; i <= mid; i++) {
        answer = answer.next;
    }

    return answer;
};