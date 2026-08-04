/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = currentHead = null;
    let extra = 0;

    while(l1 || l2 || extra){
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + extra;
        extra = Math.floor(sum/10);
        const value = sum % 10;

        const newNode = new ListNode(value);
        if(currentHead === null){
            head = newNode;
            currentHead = head;
        }else{
            currentHead.next = newNode;
            currentHead = newNode;
        }

        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
    }
    return head;
};