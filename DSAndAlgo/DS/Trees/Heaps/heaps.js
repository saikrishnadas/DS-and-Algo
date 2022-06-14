/* 
Max Binary Heap:
================
Insert Pseudocode:
-----------------------
(*) Push the value into the values property on the heap.
(*) Bubble Up:
    (*) Create a variable called index which is the length of the values property - 1
    (*) Create a variable called parentIndex which is the floor of (index - 1) / 2
    (*) Keep looping as long as the values element at the parentIndex is less than the values element at the child index
        (*) Swap the value of the values element at the parentIndex with the value of the element property at the child index
        (*) Set the index to be the parentIndex, and start over!

Extracting (or Removing):
-------------------------------------
The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) 
and restoring the properties is called down-heap ( also know as bubble-down, precolate-down, shiff-down, trickle-down, heapify-down, cascade-down and extract-min/max).

Extracting (or Removing) Pseudocode:
-------------------------------------
(*) Swap the first value in the values property with the last one.
(*) Pop from the values property, so you can return the value at the end.
(*) Have the new root "sink down" to the correct spot...
  (*) Your parent index starts at 0 (the root)
  (*) Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
  (*) Find the index of the right child: 2 * index + 2 (make sure its nit out of bounds)
  (*) If the left or right child is greater than the element...swap. If both left and right children are larger, swap with largest child.
  (*) The child index you swapped to now becomes the new parent index.
  (*) Keep looping and swapping until neither child is larger than the element.
  (*) Return the old root!


*/

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]; //test array
  }
  insert(element) {
    //can be called as Enqueue
    this.values.push(element); //pushes the new value to the end of the array
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
      if (element <= parent) break; //If element is less than parent, do nothing. Break the loop.
      //Else if the element or child is greater than its parent --> SWAP parent and child.
      this.values[parentIdx] = element; //sets element or child to parent's index
      this.values[idx] = parent; //sets parent to element or child's index
      idx = parentIdx; //Updates the index of the element
    }
  }

  //Extracting or Removing
  extractMax() {
    //can be called as Dequeue
    const max = this.values[0]; //getting the max value i.e in the first position of the list
    const end = this.values.pop(); //popping the last value and storing in end variable.
    if (this.values.length > 0) {
      //if no element in values dont do anything.
      this.values[0] = end; //Swapping the first value with the last one
      this.bubbleDown();
    }
    return max;
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
        if (leftChild > element) {
          //if left child is greater than parent, set swap to leftchild index
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        //Checking for out of bounds (i.e - no child for out of bound)
        rightChild = this.values[rightChildIdx]; //getting the righthild
        if (
          (swap === null && rightChild > element) || //if no swap, was set as left child, and if right child is great, make swap as right child index  OR
          (swap !== null && rightChild > leftChild) //if swap was set already, check which value among left and right is bigger. if right, set swap as right index
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

let heap = new MaxBinaryHeap();
heap.insert(55);
