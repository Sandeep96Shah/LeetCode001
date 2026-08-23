/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k ===0) return head;
    let count = 0;
    let currentHead = head;
    let tail = null;
    while(head) {
        count++;
        if(!head.next){
            tail = head;
        }
        head = head.next;
    }
    k = k % count;
    if(k === 0) return currentHead;
    let newK = count - k;
    count = 1;
    head = currentHead;
    while(count < newK){
        head = head.next;
        count++;
    }
    let newHead = head.next;
    if(tail) tail.next = currentHead;
    head.next = null;
    return newHead;
};