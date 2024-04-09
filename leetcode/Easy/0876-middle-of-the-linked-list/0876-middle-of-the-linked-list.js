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
    let size = 1;
    let currentNode = head;
    let middleNode = head;

    while (currentNode.next) {
        size++;
        
        if (size % 2 === 0) {
            middleNode = middleNode.next;
        }

        currentNode = currentNode.next;
    }

    return middleNode;
};