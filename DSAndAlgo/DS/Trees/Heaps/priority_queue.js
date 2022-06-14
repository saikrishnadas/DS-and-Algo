/* 
Building A Priority Queue:
---------------------------
What is a priority queue ?
A data structure where each element has a priority.
Elements with higher priorities are served before elements with lower priorities.
Priority Quene is not dependent on Heaps. Can be used with anything like list etc But better with heaps.

Priority Queue Pseudocode:
--------------------------
(*) Write a Min Binary Heap -lower number means higher priority.
(*) Each Node has a value and a priority. Usew the priority to build the heap.
(*) Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its prority.
(*) Dequeue method removes root element, returns it, and rearranges heap using priority.
*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class ProrityQueue {
  // can be called as min binary heap - because we are implementing the lowest number with high priority.
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode); //pushes the new node to the end of the array
    this.bubbleUp();
  }
  //swaps larger child value with lesser parent value
  bubbleUp() {
    let idx = this.values.length - 1; //index of the last value (or index of the pushed value)
    let element = this.values[idx]; //Element at that index (idx)
    //if index is 0 then loop breaks because, parent of index 0 is negative ((n-1)/2 ==> (0-1)/2 = -0.5)
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); //get the parent index by the formula --> Floored((n-1)/2))
      let parent = this.values[parentIdx]; //Element at the parent index
      if (element.priority >= parent.priority) break; //If element priority is greater (min binary heap. Lesser for max binary heap) than parent priority, do nothing. Break the loop.
      //Else if the element or child is lesser (min binary heap) than its parent --> SWAP parent and child.
      this.values[parentIdx] = element; //sets element or child to parent's index
      this.values[idx] = parent; //sets parent to element or child's index
      idx = parentIdx; //Updates the index of the element
    }
  }

  dequeue() {
    //can be called as extractMax
    const min = this.values[0]; //getting the max value i.e in the first position of the list
    const end = this.values.pop(); //popping the last value and storing in end variable.
    if (this.values.length > 0) {
      //if no element in values dont do anything.
      this.values[0] = end; //Swapping the first value with the last one
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let idx = 0; //setting index to zero
    const length = this.values.length; //getting the length of the array
    const element = this.values[0]; //getting the element at position zero
    while (true) {
      let leftChildIdx = 2 * idx + 1; //getting the index of the left child of parent element got above this line.
      let rightChildIdx = 2 * idx + 2; //getting the index of the right child of parent element.
      let leftChild, rightChild; //creating leftChild and rightChild variables
      let swap = null; //swap to null initially

      if (leftChildIdx < length) {
        //Checking for out of bounds (i.e - no child for out of bound)
        leftChild = this.values[leftChildIdx]; //getting the leftchild
        if (leftChild.priority < element.priority) {
          //if left child is lesser priority (min binary heap) than parent priority, set swap to leftchild index
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        //Checking for out of bounds (i.e - no child for out of bound)
        rightChild = this.values[rightChildIdx]; //getting the righthild
        if (
          (swap === null && rightChild.priority < element.priority) || //if no swap, was set as left child priority, and if right child priority is less (min binary heap), make swap as right child index  OR
          (swap !== null && rightChild.priority < leftChild.priority) //if swap was set already, check which value among left priority and right priority is lesser. if right, set swap as right index
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break; //If no swap at all break the loop
      //Swap and change the index
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let ER = new ProrityQueue();
ER.enqueue("ommon Cold", 5);
ER.enqueue("Gun Shot", 1);
ER.enqueue("High Fever", 4);
ER.enqueue("Broken Arm", 2);
ER.enqueue("Glass in foot", 3);

//Here, on calling dequeue - gun shot will be first removed because of highest priority and then broken arm and so on

//ER.dequeue(); //Gun Shot
//ER.dequeue(); //Broken Arm
//ER.dequeue(); //Glass in foot
//ER.dequeue(); //High Fever
//ER.dequeue(); //Common Cold
//ER.dequeue(); //undefined
