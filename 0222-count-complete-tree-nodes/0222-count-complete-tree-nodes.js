/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(!root) return 0;

    const leftHeight = getHeight(root, "l");
    const rightHeight = getHeight(root, "r");

    if(leftHeight === rightHeight){
        return 2 ** rightHeight - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};

const getHeight = (node, side) => {
    if(!node) return 0;

    let height = 0;

    while(node){
        height++;
        if(side==="l"){
            node = node.left;
        }else{
            node = node.right;
        }
    }
    return height;
}