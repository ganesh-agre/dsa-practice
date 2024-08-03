class TreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let newNode = new TreeNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(key) {
    if (this.root === null) return;
    this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        this.right = this.deleteNode(node.right, tempNode.key);
      }
    }
    return node;
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  preorderTraversl() {
    let values = [];
    this.preorder(this.root, values);
    return values;
  }

  preorder(node, values) {
    if (node !== null) {
      values.push(node.key);
      this.preorder(node.left, values);
      this.preorder(node.right, values);
    }
  }

  inorderTraversl() {
    let values = [];
    this.inorder(this.root, values);
    return values;
  }

  inorder(node, values) {
    if (node !== null) {
      this.inorder(node.left, values);
      values.push(node.key);
      this.inorder(node.right, values);
    }
  }
  postorderTraversl() {
    let values = [];
    this.postorder(this.root, values);
    return values;
  }

  postorder(node, values) {
    if (node !== null) {
      this.postorder(node.left, values);
      this.postorder(node.right, values);
      values.push(node.key);
    }
  }

  dfs() {
    if (this.root === null) return;
    const values = [];
    return this.dfsHelper(this.root, values);
  }

  dfsHelper(node, values) {
    if (node === null) return;
    values.push(node.key);
    this.dfsHelper(node.left, values);
    this.dfsHelper(node.right, values);
    return values;
  }

  bfs() {
    if (this.root === null) return;
    const values = [];
    return this.bfsHelper([this.root], values);
  }

  bfsHelper(nodes, values) {
    const nodeLevels = [];
    for (let node of nodes) {
      values.push(node.key);
      if (node.left) nodeLevels.push(node.left);
      if (node.right) nodeLevels.push(node.right);
    }
    if (nodeLevels.length) this.bfsHelper(nodeLevels, values);
    return values;
  }

  treeSum(node, sum = 0) {
    if (node === null) return 0;
    let leftSum = this.treeSum(node.left, sum);
    let rightSum = this.treeSum(node.right, sum);
    return (sum += node.key + leftSum + rightSum);
  }
}
let bstTree = new BST();
bstTree.insert(20);
bstTree.insert(30);
bstTree.insert(10);
bstTree.insert(5);
bstTree.insert(15);
bstTree.insert(25);
bstTree.insert(35);
bstTree.delete(15);
console.log(bstTree.preorderTraversl());
console.log(bstTree.inorderTraversl());
console.log(bstTree.postorderTraversl());
console.log(bstTree.dfs());
console.log(bstTree.bfs());
console.log(bstTree.treeSum(bstTree.root));
