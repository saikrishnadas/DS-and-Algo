/* 
The Approach:
(*) Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
(*) Once we've moved to the node we're going to visit, we look at each of its neighbors.
(*) For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node.
(*) If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.

Dijkstra's Pseudocode:
----------------------
(*) This function should accept a starting and ending vertex
(*) Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity,
    except for the starting vertex which should have a value of 0.
(*) After setting a value in the distance object, add each vertex with a priority of infinity to the priority queue, except the starting vertex,
    which should have a priority of 0 because that's where we begin.
(*) Create another object called previous and set each key to be every vertex in the adjacency list with a value of null.
(*) Start looping as long as there is anything in the priority queue.
    (*) Dequeue a vertex from the priority queue
    (*) If that vertex is the same as the ending vertex - we are done!
    (*) Otherwise loop through each value in the adjacency list at the vertex
        (*) Calculate the distance to that vertex from the starting vertex
        (*) If the distance is less than what is currently stored in our distances object.
            (*) Update the distance object with new lower distance
            (*) Update the previous object to contain that vertex
            (*) Enqueue the vertex with the total distance from the start node
*/

//A simple Priority Queue - we are sorting which is O(N * log(N))
class PriorityQueueOld {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift(); //as it always resort on enqueue , it always dequeue's small priority value
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority); //everytime we insert something it resorts based on priority
  }
}

//ProrityQueue - check the ProrityQueue section for documented ProrityQueue code. This ProrityQueue is better and much faster than above one.
class ProrityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

//Writing Weighted Graph
class WeightedGraph {
  constructor() {
    this.adjacencyList = {}; //this will have nodes as well as weights because its a weighted graph
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; //if no vertex is there in adj list, add a vertex with empty list.
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight: weight }); //pushing node as well as weights
    this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {}; //distance taken from one point to another
    const previous = {}; //previous node from going one point to another
    let smallest; //vertex with smallest priority value
    let path = []; //to return at end. Path from start point to end point

    //Build iup initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        //Distance from start point to start point is 0. (i.e) distance from point A to point A is zero
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0); //Initial state of PriorityQueue
      } else {
        //Initial distance from start point to end point is Infinity. (i.e) Initial distance from point A to point B is Infinity
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity); //Initial state of PriorityQueue
      }
      previous[vertex] = null; //Initially there won't be any pervious point
    }

    //Run as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val; //sets smallest to the vertex with smallest priority value.
      if (smallest === finish) {
        //WE ARE DONE!
        //BUILD UP THE PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        //Loop over the neighbors of the smallest
        for (let neighbor in this.adjacencyList[smallest]) {
          //Find neighboring nodes
          let nextNode = this.adjacencyList[smallest][neighbor]; //Looping through this.adjacencyList[smallest] just gives key numbers 0,1 etc, so this.adjacencyList[smallest][neighbor] gives the neighbors
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight; //add the current distance(or weight) with distance to the neighbor
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //if the new distance is less than old distance to the neighbor - update the distance / updating new smallest distance to neighbor.
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest; //updating the previous - how we got to neighbor.
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse(); //smallest is the start point eg:A, reverse the list to see the path that is taken from start point to end point
  }
}

var g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

g.Dijkstra("A", "E");
