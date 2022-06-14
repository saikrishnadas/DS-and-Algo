/* 
Visiting every node on the same level(sibiling node) is BFS.
--------------------------
(*) Create a queue(this can be a array) and a variable to store the value of the nodes visited.
(*) Place the root node in the queue.
(*) Loop as long as there is anything in the queue.
    (*) Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
    (*) If there is a left property on the node dequeueed - add it to the queue.
    (*) If there is a right property on the node dequeued - add it to the queue.
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

  //Breadth-First Search (BFS) - Iteratively
  BFS() {
    var node = this.root;
    var data = [];
    var queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}
