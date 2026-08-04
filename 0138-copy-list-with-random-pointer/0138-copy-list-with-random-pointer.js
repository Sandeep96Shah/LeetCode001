/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    let mainHead = head;

// insert copied node for each original node
    while(head){
        const node = new _Node(head.val);
        const nextNode = head.next;
        head.next = node;
        node.next = nextNode;
        head = nextNode;
    }

    // add random node logic

    head = mainHead;

    while(head){
        if(head.random){
            head.next.random = head.random.next;
        }
        head = head.next.next;
    }

    // seperate copied and original list

    head = mainHead;
    let dummy = new _Node(0);
    let currentHead = dummy;

    while(head){

        // Copy list
        const copy = head.next;

        currentHead.next = copy;

        currentHead = copy;

        // original list
        head.next = copy.next;

        head = head.next;
    }
    return dummy.next;
};