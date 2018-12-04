// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {

		// if there is not a max and the node value is greater than the max
		if (max !== null && node.data > max) return false;
		// if there is not a min and the node value is less than the max
		if (min !== null && node.data < min) return false;

		// if there is a left node, and calling validate on the left node with
		// an updated max of the current node does not return true, return false
		if (node.left && !validate(node.left, min, node.data)) return false;

		// if there is a right node, and calling validate on the right node with
		// an updated min of the current node does not return true, return false
		if (node.right && !validate(node.right, node.data, max)) return false;

		// if everything else fails, it's valid
		return true;
}

module.exports = validate;
