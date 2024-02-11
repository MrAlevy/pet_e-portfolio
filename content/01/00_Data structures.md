# Data Structures reflection

_Read Dicheva & Hodge (2018). Think about an online system which you use on a daily basis. Consider how it might operate at the back-end using data structures. This will inform our discussion during next week’s seminar._
</br>

I've chosen social media platforms as the basis for this reflection. Nowadays, most people use platforms like Facebook, Instagram, or business-oriented ones like LinkedIn in one way or another. Despite their diverse purposes, they all share a common data structure for storing and serving data.
A fundamental element is the use of databases for efficient storage and retrieval of user data. Tables link user profiles, posts, and comments, facilitating quick access to information. Hash tables further optimize search functions, enabling swift data retrieval through hashing algorithms. Additionally, besides relational databases, there are also NoSQL databases, such as AWS DynamoDB, where data is represented by non-structured objects with arbitrary attributes (Perkins, Wilson and Redmond, 2018).
Graph data structures are crucial for modeling connections between users in social networks. Each user becomes a node, and relationships are depicted through edges, allowing efficient analysis and retrieval of connections. Algorithms like depth-first search or breadth-first search identify clusters of users with shared interests (Baka, 2017).
Queues are used both for internal purposes and for client-server interconnections. Microservices use queues to communicate with each other, and client messages might be received and stored in FIFO queues to preserve their order until the server is ready to receive and process them (Niu, Liu and Li, 2018).
In summary, the back-end operations of online systems rely on a strategic combination of relational databases, hash tables, and graph structures. These elements collectively define the efficiency and responsiveness of these systems, shaping the overall user experience. The integration of NoSQL databases and the use of queues for communication further enhance the robustness and scalability of these platforms.
</br>

**References**
- Baka, B. (2017) Python Data Structures and Algorithms. Packt Publishing Ltd.
- Niu, Y., Liu, F. and Li, Z. (2018) ‘Load Balancing Across Microservices’, in IEEE INFOCOM 2018 - IEEE Conference on Computer Communications. IEEE, pp. 198–206.
- Perkins, L., Wilson, J. and Redmond, E. (2018) ‘Seven databases in seven weeks: a guide to modern databases and the NoSQL movement’, Seven Databases in Seven Weeks, pp. 1–325.
</br>
</br>

## Reflection on comments
In addressing my tutor's feedback, I see the value in refining my understanding of NoSQL databases, which I initially described as "non-structured." This perspective was rightly challenged, as many NoSQL databases, including those using JSON, indeed employ structured formats and sophisticated data models like graphs. This insight corrects my oversight and enriches my comprehension of how social media platforms manage and navigate complex user networks.

The critique also pointed out a disconnect in my analysis, particularly my failure to integrate personal engagement with social media into the reflection. This feedback is a reminder of the importance of infusing personal insights into academic analysis. I chose social media due to its ubiquity in my daily life, not only as a tool for personal connection but also as a professional platform. This exercise has made me to think more deeply about the underlying data structures that power these platforms, influencing both user experience and the fabric of digital social systems. Moving forward, I aim to more closely tie technical mechanisms to their real-world applications and implications, grounding my reflections in both personal experience and academic theory.
</br>

# Main Data Structures

## HashMap
Key-value pair storage with unique keys.
_Time Complexity:_ Average: `O(1)` for search, insert, delete.
</br>

## LinkedList
A sequence of elements where each element points to the next.
_Time Complexity:_ `O(n)` for search and deletion (worst case), `O(1)` for insertion at the head.

```python
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
```

<pre class="mermaid flex justify-center mb-5">
graph LR;
    Node1("[Node1] <br/> val: val1 <br/> next: Node2")
    Node2("[Node2] <br/> val: val2 <br/> next: Null")
    Null("Null")
    Node1 --> Node2
    Node2 --> Null
</pre>

## Tree
A hierarchical structure with a single root and nodes having zero or more children.
_Time Complexity:_ `O(log n)` for balanced trees for search, insert, delete; `O(n)` in the worst case (unbalanced).

```python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.children = []
```

<pre class="mermaid flex justify-center mb-5">
graph TD;
    Root("[Root] <br/> val: root_val <br/> children: Node1, Node2")
    Node1("[Node1] <br/> val: val1 <br/> children: Null")
    Node2("[Node2] <br/> val: val2 <br/> children: Null")
    Null1("Null")
    Null2("Null")
    Root --> Node1
    Root --> Node2
    Node1 --> Null1
    Node2 --> Null2
</pre>

## Graph
A set of nodes connected by edges.
_Time Complexity:_ Depends on the representation: `O(1)` for an adjacency matrix to check connectivity, `O(n)` for an adjacency list to find all edges.

```python
class GraphNode:
    def __init__(self, val):
        self.val = val
        self.edges = []

    def add_edge(self, node):
        self.edges.append(node)
```

<pre class="mermaid flex justify-center mb-5">
graph TD;
    Node1("[Node1] <br/> val: val1 <br/> edges: Node2, Node3")
    Node2("[Node2] <br/> val: val2 <br/> edges: Node1, Node3")
    Node3("[Node3] <br/> val: val3 <br/> edges: Node1, Node2")
    Node1 --> Node2
    Node1 --> Node3
    Node2 --> Node3
</pre>

## Stack
LIFO (Last In, First Out) data structure.
_Time Complexity:_ `O(1)` for push, pop, and peek operations.

```python
stack = []

stack.append(1)
stack.append(2)

print(stack.pop())  # Output: 2
print(stack.pop())  # Output: 1
```

<pre class="mermaid flex justify-center mb-5">
graph TD;
    Top("[Top] <br/> val: val1 <br/> next: Element")
    Element("[Element] <br/> val: val2 <br/> next: Null")
    Null("Null")
    Top --> Element
    Element --> Null
</pre>

## Queue
FIFO (First In, First Out) data structure.
_Time Complexity:_ `O(1)` for enqueue and dequeue operations.
</br>

```python
from collections import deque

queue = deque(["Apple", "Banana", "Cherry"])
queue.append("Orange")

print(queue.popleft())  # Output: Apple
print(queue)  # Output: deque(['Banana', 'Cherry', 'Orange'])
```

<pre class="mermaid flex justify-center mb-5">
graph LR;
    Front("[Front] <br/> val: val1 <br/> next: Rear")
    Rear("[Rear] <br/> val: val2 <br/> next: Null")
    Null("Null")
    Front --> Rear
    Rear --> Null
</pre>

## Binary Search Tree (BST)
A tree where each node has up to two children, with the left child less than the parent node and the right child greater.
_Time Complexity:_ Average: `O(log n)` for search, insert, delete; Worst: `O(n)` if unbalanced.
</br>

## Heap
A complete binary tree where each node is smaller (min-heap) or larger (max-heap) than its children.
_Time Complexity:_ `O(log n)` for insertion and deletion, `O(1)` for finding min (min-heap) or max (max-heap).

```python
import heapq

heap = [3, 1, 4, 1, 5, 9, 2, 6]
heapq.heapify(heap)
heapq.heappush(heap, 3)

print(heapq.heappop(heap))  # Output: 1
print(heap[0])  # Output: 1 (after popping the first 1)
print(heap)  # Output: [1, 3, 2, 3, 5, 9, 4, 6]
```
</br>

## Trie
A tree-like structure specialized to store strings where each node represents a character of the string.
_Time Complexity:_ `O(length of the word)` for search, insert, delete operations.

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False
```

<pre class="mermaid flex justify-center mb-5">
graph TD;
    Root("[Root] <br/> children: A, B <br/> is_end_of_word: False")
    NodeA("[A] <br/> children: C <br/> is_end_of_word: False")
    NodeB("[B] <br/> children: Null <br/> is_end_of_word: True")
    NodeC("[C] <br/> children: Null <br/> is_end_of_word: True")
    Null1("Null")
    Null2("Null")
    Root -->|A| NodeA
    Root -->|B| NodeB
    NodeA -->|C| NodeC
    NodeB -->|Null| Null1
    NodeC -->|Null| Null2
</pre>
