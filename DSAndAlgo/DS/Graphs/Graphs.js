/* 
Graphs and we use adjancency list to store.

Undirected Graph
================
Adding a vertex
----------------
(*) Write a method called addVertex, which accpets a name of a vertex
(*) It should add a key to the adjacency list with the name of he vertex and set its value to be an empty array.

Adding an Edges
----------------
(*) This function should accpet two vertices, we call them vertex1 and vertex2.
(*) The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
(*) The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
(*) Don't worry about handling errors/invalid vertices

Removing An Edge
----------------
(*) This function should accpet two vertices, we call them vertex1 and vertex2.
(*) The function should reassign the key of vertex1 to be an array that does not contain vertex2
(*) The function should reassign the key of vertex2 to be an array that does not contain vertex1
(*) Don't worry about handling errors/invalid vertices

Removing a Vertex
-----------------
(*) The function should accpet a vertex to remove
(*) The function should loop as long as there are any other vertices in the adjacency list for that vertex.
(*) Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex.
(*) Delete the key in the adjacency list for that vertex


Graph Traversal - Visiting/ Updating/ Checking each vertex in a graph

Graph Traversal Uses:
(*) Peer to peer networking
(*) Web crawlers
(*) Finding "closest" matches / recommendations
(*) Shortest path problems
    (*) GPS Navigation
    (*) Solving mazes
    (*) AI (shortest path to win the game)

Types:
Depth First Graph Traversal
Breadth First Graph Traversal

Depth First Graph Traversal:
----------------------------
Pseudocode: (Recursive)
=======================
DFS(vertex):
    if vertex is empty
        return (this is base case)
    add vertex to results list
    mark vertex as visited
    for each neighbor in vertex's neighbors:
        if neighbor is not visited:
            recursively call DFS on neighbor

Detailed Pseudocode: (Recursive)
(*) The function should accept a starting node
(*) Create a list to store the end result, to be returned at the very end
(*) Create an object to store visited vertices
(*) Create a helper function which accepts a vertex
    (*) The helper function should return early if the vertex is empty
    (*) The helper function should place the vertex it accepts into the visited object and push that vertex into result array.
    (*) Loop over all of the values in the adjacencyList of that vertex
    (*) If any of those values have not been visited, recursively invoke the helper function with that vertex

Pseudocode: (Iterative)
=======================
DFS-iterative(start):
  let S be a stack
  S.push(start)
  while S is not empty
    vertex = S.pop()
    if vertex is not labeled as discovered:
      visit vertex (add to result list)
      label vertex as discovered
      for each of vertex's neighbors, N do S.push(N)

Detailed Pseudocode: (Iterative)
(*) The function should accept a starting node
(*) Create a stack to help use keep track of vertices (use a list/array)
(*) Create a list to store the end result, to be returned at the very end
(*) Create an object to store visited vertices
(*) Add the starting vertex to the stack, and mark it visited
(*) While the stack has something in it:
  (*) Pop the next vertex from the stack
  (*) If that vertex hasn't been visited yet:
    (*) Mark it as visited
    (*) Add it to the result list
    (*) Push all of its neighbors into the stack 

Breadth First Graph Traversal:
--------------------------------
Pseudocode:
=======================
(*) This function should accept a starting vertex
(*) Create a queue (you can use an array) and pace the starting vertex in it
(*) Create an array to store the nodes visited
(*) Mark the starting vertex as visited
(*) Loop as long as there is anything in the queue
(*) Remove the first vertex from the queue and push it into the array that stores nodes visited.
(*) Lopp over each vertex in the adjacency list for the vertex you are visiting.
(*) If it is not inside the object that stores nodes visited, mark it as visited and enqueue the vertex
*/

//Undirected Graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; //if no vertex is there in adj list, add a vertex with empty list.
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjancentVertex = this.adjacencyList[vertex].pop(); //poping out all the edges from the vertex
      this.removeEdge(vertex, adjancentVertex);
    }
    delete this.adjacencyList[vertex]; //delete the vertex
  }

  // Depth First Traversal - Recursive
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList; //you must define adjacencyList here, so that "this" doesn't work inside the helper function, this.adjacencyList inside helper function returns undefined.

    //Helper function to do the logic of visited and pushing to list (result array)
    function dfsHelper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true; //if the vertex is visited, add the vertex to the object key and set its value to be true
      result.push(vertex); //then, push the vertex to the list
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          //loop through its neighbor nodes, and incase neighbor isn't visited, call the helper function on the neighbor.
          return dfs(neighbor);
        }
      });
    }
    dfs(start);
    return result;
  }

  // Depth First Traversal - Iterative
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  //Breadth First Traversal
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
