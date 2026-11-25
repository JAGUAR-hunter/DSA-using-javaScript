```markdown
# Data Structures and Algorithms in JavaScript

Structured JavaScript implementations, complexity breakdowns, edge cases, and interview patterns for core Data Structures and Algorithms (DSA) concepts.

---

## Overview

This repository serves as a comprehensive reference and study guide for mastering Data Structures and Algorithms using modern JavaScript (ES6+). Each topic is documented and implemented with a four-pillar learning methodology:

1. **Core Basics & Intuition** — Clear definitions, mental models, and clean starter implementations.
2. **Mechanics, Edge Cases & Complexity** — Step-by-step operations, boundary conditions, JavaScript-specific caveats, and Big-O time/space complexity analysis.
3. **Patterns & Optimal Strategy** — Recognition cues, transitions from brute-force to optimal approaches, and core invariants.
4. **Interview Framing & Practice** — Common problem archetypes, frequent pitfalls, and curated practice exercises.

---

## Repository Structure

```text
dsa-javascript/
├── 01-arrays-and-hashing/
│   ├── README.md
│   └── implementations.js
├── 02-two-pointers/
├── 03-sliding-window/
├── 04-stack-and-queue/
├── 05-binary-search/
├── 06-linked-lists/
├── 07-trees-and-bst/
├── 08-tries/
├── 09-heaps-and-priority-queues/
├── 10-backtracking/
├── 11-graphs/
├── 12-dynamic-programming/
├── 13-greedy-algorithms/
├── 14-intervals-and-bit-manipulation/
└── README.md

```

---

## Curriculum & Progress Tracker

### Data Structures

| Topic | Key Operations | Time Complexity (Avg) | Status |
| --- | --- | --- | --- |
| **Arrays & Dynamic Lists** | Access, Push/Pop, Insert/Delete | $O(1)$ / $O(1)$ / $O(n)$ | Planned |
| **Hash Tables (`Map` / `Set`)** | Lookup, Insert, Delete | $O(1)$ | Planned |
| **Linked Lists (Singly & Doubly)** | Prepend, Append, Search | $O(1)$ / $O(1)$ / $O(n)$ | Planned |
| **Stacks & Queues** | Push, Pop, Peek, Enqueue, Dequeue | $O(1)$ | Planned |
| **Trees & Binary Search Trees** | Search, Insert, Delete | $O(\log n)$ | Planned |
| **Tries (Prefix Trees)** | Insert, Search, StartsWith | $O(L)$ | Planned |
| **Heaps / Priority Queues** | Peek, Push, Pop | $O(1)$ / $O(\log n)$ | Planned |
| **Graphs (Adjacency List/Matrix)** | BFS, DFS, Shortest Path | $O(V + E)$ | Planned |

### Core Algorithmic Patterns

* [ ] **Two Pointers** — Opposite ends, fast & slow pointers, partitioning
* [ ] **Sliding Window** — Fixed-size windows, dynamic shrinking/expanding windows
* [ ] **Binary Search** — Sorted arrays, rotated arrays, search space reduction
* [ ] **Recursion & Backtracking** — Subsets, permutations, combinations, constraint satisfaction
* [ ] **Tree & Graph Traversals** — Preorder, Inorder, Postorder, Level-Order (BFS), Topological Sort
* [ ] **Dynamic Programming** — Memoization (top-down), tabulation (bottom-up), 1D & 2D state transitions
* [ ] **Greedy Algorithms** — Interval scheduling, local-to-global optimal choices
* [ ] **Bit Manipulation** — Bitwise masks, XOR properties, power-of-two checks

---

## JavaScript-Specific DSA Notes

When implementing algorithms in JavaScript, keep these runtime behaviors in mind:

* **Prefer `Map` and `Set` over plain objects `{}**` for hash tables to avoid prototype key collisions (e.g., `constructor`, `toString`) and to preserve insertion order with $O(1)$ `.size` checks.
* **Avoid `Array.prototype.shift()` for queues** on large datasets; `shift()` runs in $O(n)$ time. Use an index pointer or a custom doubly linked list / circular buffer for $O(1)$ dequeues.
* **No built-in Heap / Priority Queue:** JavaScript's standard library does not include a heap. Implement a reusable `MinHeap` / `MaxHeap` class backed by an array.
* **Sorting defaults to lexicographical order:** Always pass a comparator function (`arr.sort((a, b) => a - b)`) when sorting numbers.
* **Integer limits:** Standard numbers are 64-bit floats (`Number.MAX_SAFE_INTEGER` is $2^{53} - 1$). Use `BigInt` when exact arithmetic exceeds safe integer bounds.

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18+ recommended)

### Running Examples

Clone the repository and execute any topic file directly with Node:

```bash
git clone <your-repo-url>
cd dsa-javascript
node 01-arrays-and-hashing/implementations.js

```

---

## Topic Documentation Template

Every topic folder follows a consistent structure:

1. **Concept Overview & Intuition** — What problem the structure or algorithm solves.
2. **Step-by-Step Mechanics** — Visual trace of inputs, states, and outputs.
3. **Complexity & Edge Cases** — Best/average/worst Big-O metrics plus null, empty, duplicate, and boundary input handling.
4. **Pattern Recognition** — Triggers that signal when to apply the technique.
5. **Annotated JavaScript Code** — Clean, readable, and idiomatic ES6+ solutions.

---

## License

This project is open source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

```

<FollowUp label="Want to dive into our first topic: Arrays and Hashing in JavaScript?" query="Explain Arrays and Hashing in JavaScript using W3Schools DSA, GeeksforGeeks, NeetCode, and LeetCode perspectives."/>

```