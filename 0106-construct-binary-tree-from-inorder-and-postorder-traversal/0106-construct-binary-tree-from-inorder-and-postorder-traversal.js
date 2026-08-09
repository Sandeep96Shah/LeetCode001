/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(postorder.length !== inorder.length || !postorder.length) return null;

    const node = new TreeNode(postorder[postorder.length - 1]);
    const sliceIndex = inorder.indexOf(node.val);

    const leftInorder = inorder.slice(0, sliceIndex);
    const rightInorder = inorder.slice(sliceIndex + 1);

    const leftInorderLength = leftInorder.length;

    const leftPostorder = postorder.slice(0, leftInorderLength);
    const rightPostorder = postorder.slice(leftInorderLength, -1);

    node.left = buildTree(leftInorder, leftPostorder);
    node.right = buildTree(rightInorder, rightPostorder);

    return node;
};