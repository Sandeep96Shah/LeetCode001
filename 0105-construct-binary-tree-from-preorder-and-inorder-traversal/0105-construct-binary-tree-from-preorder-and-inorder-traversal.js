/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length !== inorder.length || !preorder.length) return null;

    const node = new TreeNode(preorder[0]);
    const sliceIndex = inorder.indexOf(node.val);

    const leftInorder = inorder.slice(0, sliceIndex);
    const rightInorder = inorder.slice(sliceIndex + 1);

    const leftInorderLength = leftInorder.length;

    const leftPreorder = preorder.slice(1, leftInorderLength + 1);
    const rightPreorder = preorder.slice(leftInorderLength + 1);

    node.left = buildTree(leftPreorder, leftInorder);
    node.right = buildTree(rightPreorder, rightInorder);

    return node;
};