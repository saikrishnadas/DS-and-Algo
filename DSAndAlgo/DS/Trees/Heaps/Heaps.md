What is A Binary Heap?
Very Similar to a binary search tree, but with some different rules!

In a MaxBinaryHeap, parent nodes are always larger than the child nodes.
In a MinBinaryHeap, parent nodes are always smaller than child nodes.

Max Binary Heap:
(_) Each Parent has at most two child nodes
(_) The value of each parent node is always greater than its child nodes.
(_) In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
(_) A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

Min Binary Heap:
(_) Each Parent has at most two child nodes
(_) The value of each parent node is always lesser than its child nodes.
(_) In a min Binary Heap the parent is lesser than the children, but there are no guarantees between sibling nodes.
(_) A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

Why do we need to know this?
Binary Heaps are used to implement Priority Queues, which are very commonly used data structures.
They are also used quite a bit, with graph traversal algorithms

Storing Heap:
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344812?start=30#questions
Heap values can be stored in linked list or binary tree but storing it in array is the best.

For any index of an array n..
The left child is stored at 2n+1
The right child is stored at 2n+2

For any child node at index n...
Its parent is at index Floored((n-1)/2)

Big O of Binary Heaps:
Insertion - O(log N)
Removal - O(log N)
Search - O(N)
