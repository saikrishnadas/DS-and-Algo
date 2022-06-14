/* 
Binary Search Trees (or Binary Trees) - Binary seacrh tree is a type of sorted binary tree with each node can have atmost 2 children

How BST works:
(*) Every Parent node has at most two children.
(*) Every node to the left of the parent node is always less than the parent.
(*) Every node to the right of the parent node is always greater than the parent.

Pseudocodes 
-----------
Can be done both iteratively or Recursively

Insert a node:
(*)Create a new node
(*)Starting at the root
  (*) Check if there is a root, if not - the root now becomes that new node!
  (*) If there is a root, Check if the value of the new node is greater than or less than the value of the root.
  (*) If it is greater
    (*) Check to see if there is a node to the right
      (*) If there is, move to that node and repeat these steps
      (*) If there is not, add that node as the right property.
  (*) If it is less
    (*)Check to see if there is a node to the left
      (*) If there is, move to that node and repeat these steps
      (*)If there is not, add that node as the left property

Find a node:
(*) Starting at the root
  (*) Check if there is a root, if not - we're done searching!
  (*) If there is a root, check if the value of the new node is the value we are looking for.
      If we found it, we're done!
  (*) If not, Check to see if the value is greater than or less than the value of the root.
  (*) If it is greater
    (*) Check to see if there is a node to the right
      (*) If there is, move to that node and repeat these steps
      (*) If there is not, we're done searching!
  (*) If it is less
    (*)Check to see if there is a node to the left
      (*) If there is, move to that node and repeat these steps
      (*)If there is not, we're done searching!

Big O :- 
Time Complexity:
Insertion - O(log n) - Best case
Searching - O(log n) - Best case
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
}
