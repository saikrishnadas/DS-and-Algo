/* 
Visits nodes vertically.
There are 3 types - PreOrder, PostOrder, InOrder

PreOrder - Visit the root first and then full left side then full right side.
PostOrder - Start at the root, then go on to left and visit the nodes and to right, visit the node, finally after visiting childrens and visit the parents
InOrder -  Start at the root, then go to very left end, visit the child node then back to parent node then to right child node and so on

--------------------------
Pre-Order:
//Recursively
(*) Create a variable to store the value of the nodes visited.
(*) Store the root of the BST in a variable called current.
(*) Write a helper function which accpets a node
    (*) Push the value of the node to the varibale that stores the values.
    (*) If there is a left property, call the helper function with the left property on the node.
    (*) If there is a right property, call the helper function with the right property on the node.
(*) Return the variable that stores the values.

Post-Order:
//Recursively
(*) Create a variable to store the value of the nodes visited.
(*) Store the root of the BST in a variable called current.
(*) Write a helper function which accpets a node
    (*) If there is a left property, call the helper function with the left property on the node.
    (*) If there is a right property, call the helper function with the right property on the node.
    (*) Push the value of the node to the varibale that stores the values.
(*) Return the variable that stores the values.

In-Order:
//Recursively
(*) Create a variable to store the value of the nodes visited.
(*) Store the root of the BST in a variable called current.
(*) Write a helper function which accpets a node
    (*) If there is a left property, call the helper function with the left property on the node.
    (*) Push the value of the node to the varibale that stores the values.
    (*) If there is a right property, call the helper function with the right property on the node.
(*) Return the variable that stores the values.
--------------------------
*/
//Node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Binary Search Tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //Insert
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  //Find
  find(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  //Same as find - but this is a true or false verison if the node is found or not
  contains(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  //Depth-First Search (DFS) - Recursively
  DFSPreorder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  DFSPostorder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  DFSInorder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}
