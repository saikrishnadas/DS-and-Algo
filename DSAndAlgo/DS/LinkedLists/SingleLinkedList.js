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

Get function :- (Retrieving a node by it's position in the Linked List)
(*) This function should accept an index
(*) If the index is less than zero or greater than or equal to the length of the list, return null
(*) Loop through the list until you reach the index and return the node at the specific index.

Set function :- (Changing the value of a node based on it's position in the Linked List)
(*) This function should accept an index and a value.
(*) use your get function to find the specific node.
(*) If the node is not found, return false.
(*) If the node is found, set the value of that node to be the value passed to the function and return true

Insert function :- (Adding a node to the linked list at a specific position)
(*) If the index is less than zero or greater than the length, return false.
(*) If the index is the same as the length, push a new node to the end of the list.
(*) If the index is 0, unshift a new node to the start of the list
(*) Otherwise, using the get method, access the node at the index - 1
(*) Set the next property on that node to be the new node
(*) Set the next property on that new node to be the previous next.
(*) Increment the length
(*) Return true

Remove function :- (Removing a node from the linked list at a specific position)
(*) If the index is less than zero or greater than the length, return undefined.
(*) If the index is the same as the length - 1, pop.
(*) If the index is 0, shift.
(*) Otherwise, using the get method, access the node at the index - 1.
(*) Set the next property on that node to be the next of the next node.
(*) Decrement the length.
(*) Return the value of the node removed.

Reverse function :- (Reversing the Linked List in place!)
(*) Swap the head and tail
(*) Create a variable called next
(*) Create a variable called prev
(*) Create a variable called node and initialize it to the head property/
(*) Loop through the list
(*) Set next to be the next property on whatever node is.
(*) Set the next property on the node to be whatever prev is.
(*) Set prev to be the value of the node variable.
(*) Set the node variable to be the value of the next variable. 


Big O :- 
Time Complexity:
Insertion - O(1) (Insertion is adding element at the start)
Removal - It depends... O(1) or O(n) (if the element is at the beginning O(1), if it is at the last (On))
Searching - O(n)
Access - O(n)

(*) Singly Linked List are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required.
(*) Array contains a build in index whereas Linked list do not.
(*) The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues.
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

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val); //!! is to make it boolean. (eg: "hi" --> !"hi" gives false and !!"hi" gives true)
    if (index === 0) return !!this.unshift(val); //more on !! visit:  https://brianflove.com/2014-09-02/whats-the-double-exclamation-mark-for-in-javascript/

    var newNode = new Node(val);
    var prev = this.get(index - 1); //index - 1 is to get the previous node
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    //Changing head as tail and tail as head
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null; //null because prev of current head is null.
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  //Print(helper function) - It just print all the value in the linked list in the same order to an array. This is to help us what is happening, just to check the values and the order of the values.
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
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
