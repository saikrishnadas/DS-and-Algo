/*
Pseudocodes
-----------
Push function :- (Push the node to end of the Linked List!)
(*) This function should accept a value
(*) Create a new node using the value passed to function.
(*) If there is no head property on the list, set the head and tail to be the newly created node.
(*) Otherwise set the next property on the list to be the newly created node.
(*) Increment the length by one.
(*) Return the linked list

Push function :- (Remove a node from the end of the Linked List!)
(*) If there are no nodes in the list, return undefined
(*) Loop through the list until you reach the tail
(*) Set the next property of the 2nd to last node to be null
(*) Set the tail to be the 2nd to last node
(*) Decrement the length of the list by 1
(*) If the list is of length zero, set head and tail as null
(*) Return the value of the node removed

Shift function :- (Remove a new node from the beginning of the Linked List!)
(*) If there are no nodes, return undefined
(*) Store the current head property in a variable
(*) Set the head property to be the current head's next property
(*) Decrement the length by 1
(*) If the list is of length zero, set tail as null
(*) Return the value of the node removed

Unshift function :- (Adding a new node to the beginning of the Linked List!)
(*) This function should accept a value
(*) Create a new node using the value passed to the function.
(*) If there is no head property on the list, set the head and tail to be the newly created node.
(*) Otherwise set the newly created node's next property to be the current head property on the list.
(*) Set the head property on the list to be that newly created node.
(*) Increment the length of the list by 1.
(*) Return the linked list.
------------------------------------------------------------------------------------------------------------------------------------------------
*/

//Single Linked List
//Creating a Node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Creating Single Linked List
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current; //newTail is the previous node of current
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    //If every items is poped out i.e we have zero items then make head and tail null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

// var list = new SingleLinkedList();
// list.push("SAI");
// list.push("KRISHNA");
// list.push(23);

//console.log(list.head) //"SAI"
//console.log(list.head.next) //"KRISHNA"
//console.log(list.head.next.next) //10
//console.log(list.tail) //10
//console.log(list.length) //3
