Graphs:
A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points,
together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

Nodes (or vertices) + Connections : A graph is are set of nodes (or vertices) and connection between the nodes (or vertices).

Uses for graphs:
(_) Social Networks
(_) Location / Mapping
(_) Routing Algorithms
(_) Recommendations engine - "people also watched","you might also like..","people you might know", "frequently bought with"
(_) Visual Hierarchy
(_) File System Optimizations
(\_) EVERYWHERE!

Essential Graph Terms:
(_) Vertex - a node
(_) Edge - connection betweem nodes
(_) Weighted / Unweighted - values assigned to distances between vertices
(_) Directed / Undirected - direction assigned to distanced between vertices

Types of Grapths:
Undirected Graph - There are no direction between vertices. It is bi-direction(i.e both ways)
Directed Graph - There is direction between vertices.
Unweighted Graph - Each connection (or Edge) between the vertices has no value.
Weighted Graph - Each connection (or Edge) between the vertices has value.

There can be - weighted directed graph, weighted undirected graph, unweighted directed graph, unweighted undirected graph.

Graphs are stored in Adjacency Matrix.
An adjacency matrix is a way of representing a graph as a matrix of booleans (0's and 1's). A finite graph can be represented in the form of a square matrix on a computer, where the boolean value of the matrix indicates if there is a direct path between two vertices.

Graphs can also be stored in Adjacency List.
An adjacency list is a collection of unordered lists used to represent a finite graph. Each unordered list within an adjacency list describes the set of neighbors of a particular vertex in the graph.

Differences & Big O:
|V| - number of vertices
|E| - number of Edges

Operation:
Add Vertex ==> Adjacency List O(1) & Adjacency Matrix O(|V^2|)
Add Edge ==> Adjacency List O(1) & Adjacency Matrix O(1)
Remove Vertex ==> Adjacency List O(|V| + |E|) & Adjacency Matrix O(|V^2|)
Remove Edge ==> Adjacency List O(|E|) & Adjacency Matrix O(1)
Qery ==> Adjacency List O(|V| + |E|) & Adjacency Matrix O(1)
Storage ==> Adjacency List O(|V| + |E|) & Adjacency Matrix O(|V^2|)

Most of the data in the real-world tends to lend itself to sparser and/or larger graphs. So, mostly adjancency list is used.
