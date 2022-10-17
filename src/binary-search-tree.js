const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }
  
  newNode(data) {
    return {
      data: data,
      left: null,
      right: null,
    };
  }
      
  addNewNode(node, data) {
    if (node === null) {
      node = this.newNode(data);
    } else if (node.data > data) {
      node.left = this.addNewNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.addNewNode(node.right, data);
    }
    return node;
  }

  add(data) {
    this.treeRoot = this.addNewNode(this.treeRoot, data);
    return this.treeRoot;
  }

  has(data) {
    if (this.find(data) !== null) {
      return true;
    } else {
      return false;
    }
  }

  search(node, data) {
    if (node === null){
      return null;
    } else if (data === node.data) {
      return node;
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return this.search(node.left, data);
    }
  }

  find(data) {
    return this.search(this.treeRoot, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else if (node.data > data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let minNode = this.findMin(node.right);
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    }
  }

  remove(data) {
    this.treeRoot = this.removeNode(this.treeRoot, data);
  }

  findMin(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMin(node.left);
    }
  }

  min() {
    return this.findMin(this.treeRoot).data;
  }

  findMax(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.findMax(node.right);
    }
  }

  max() {
    return this.findMax(this.treeRoot).data;
  }
}


module.exports = {
  BinarySearchTree
};