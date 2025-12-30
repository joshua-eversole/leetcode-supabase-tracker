// Grabbed this online, still have to populate most of the lists
export const PROBLEM_SETS = [
  {
    id: 'blind75',
    title: 'Blind 75',
    description: 'The most famous list of 75 essential LeetCode questions to crack the coding interview.',
    problems: [
      // Array & Hashing
      { title: 'Two Sum', external_id: 'two-sum', difficulty: 'Easy', tags: ['Array', 'Hash Table'] },
      { title: 'Contains Duplicate', external_id: 'contains-duplicate', difficulty: 'Easy', tags: ['Array', 'Hash Table'] },
      { title: 'Valid Anagram', external_id: 'valid-anagram', difficulty: 'Easy', tags: ['String', 'Hash Table'] },
      { title: 'Group Anagrams', external_id: 'group-anagrams', difficulty: 'Medium', tags: ['Array', 'Hash Table'] },
      { title: 'Top K Frequent Elements', external_id: 'top-k-frequent-elements', difficulty: 'Medium', tags: ['Array', 'Heap'] },
      { title: 'Product of Array Except Self', external_id: 'product-of-array-except-self', difficulty: 'Medium', tags: ['Array'] },
      { title: 'Encode and Decode Strings', external_id: 'encode-and-decode-strings', difficulty: 'Medium', tags: ['String'] },
      { title: 'Longest Consecutive Sequence', external_id: 'longest-consecutive-sequence', difficulty: 'Medium', tags: ['Array', 'Union Find'] },
      
      // Two Pointers
      { title: 'Valid Palindrome', external_id: 'valid-palindrome', difficulty: 'Easy', tags: ['Two Pointers'] },
      { title: '3Sum', external_id: '3sum', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: 'Container With Most Water', external_id: 'container-with-most-water', difficulty: 'Medium', tags: ['Two Pointers'] },
      
      // Sliding Window
      { title: 'Best Time to Buy and Sell Stock', external_id: 'best-time-to-buy-and-sell-stock', difficulty: 'Easy', tags: ['Array'] },
      { title: 'Longest Substring Without Repeating Characters', external_id: 'longest-substring-without-repeating-characters', difficulty: 'Medium', tags: ['Sliding Window'] },
      { title: 'Longest Repeating Character Replacement', external_id: 'longest-repeating-character-replacement', difficulty: 'Medium', tags: ['Sliding Window'] },
      { title: 'Minimum Window Substring', external_id: 'minimum-window-substring', difficulty: 'Hard', tags: ['Sliding Window'] },
      
      // Stack
      { title: 'Valid Parentheses', external_id: 'valid-parentheses', difficulty: 'Easy', tags: ['Stack'] },
      
      // Binary Search
      { title: 'Find Minimum in Rotated Sorted Array', external_id: 'find-minimum-in-rotated-sorted-array', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Search in Rotated Sorted Array', external_id: 'search-in-rotated-sorted-array', difficulty: 'Medium', tags: ['Binary Search'] },
      
      // Linked List
      { title: 'Reverse Linked List', external_id: 'reverse-linked-list', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Merge Two Sorted Lists', external_id: 'merge-two-sorted-lists', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Reorder List', external_id: 'reorder-list', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Remove Nth Node From End of List', external_id: 'remove-nth-node-from-end-of-list', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Linked List Cycle', external_id: 'linked-list-cycle', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Merge k Sorted Lists', external_id: 'merge-k-sorted-lists', difficulty: 'Hard', tags: ['Linked List', 'Heap'] },
      
      // Trees
      { title: 'Invert Binary Tree', external_id: 'invert-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Maximum Depth of Binary Tree', external_id: 'maximum-depth-of-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Same Tree', external_id: 'same-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Subtree of Another Tree', external_id: 'subtree-of-another-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Lowest Common Ancestor of a BST', external_id: 'lowest-common-ancestor-of-a-binary-search-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Binary Tree Level Order Traversal', external_id: 'binary-tree-level-order-traversal', difficulty: 'Medium', tags: ['Tree', 'BFS'] },
      { title: 'Validate Binary Search Tree', external_id: 'validate-binary-search-tree', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Kth Smallest Element in a BST', external_id: 'kth-smallest-element-in-a-bst', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Construct Binary Tree from Preorder and Inorder Traversal', external_id: 'construct-binary-tree-from-preorder-and-inorder-traversal', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Binary Tree Maximum Path Sum', external_id: 'binary-tree-maximum-path-sum', difficulty: 'Hard', tags: ['Tree'] },
      { title: 'Serialize and Deserialize Binary Tree', external_id: 'serialize-and-deserialize-binary-tree', difficulty: 'Hard', tags: ['Tree'] },
      
      // Trie
      { title: 'Implement Trie (Prefix Tree)', external_id: 'implement-trie-prefix-tree', difficulty: 'Medium', tags: ['Trie'] },
      { title: 'Word Search II', external_id: 'word-search-ii', difficulty: 'Hard', tags: ['Trie', 'Backtracking'] },
      
      // Heap
      { title: 'Find Median from Data Stream', external_id: 'find-median-from-data-stream', difficulty: 'Hard', tags: ['Heap'] },
      
      // Backtracking
      { title: 'Combination Sum', external_id: 'combination-sum', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Word Search', external_id: 'word-search', difficulty: 'Medium', tags: ['Backtracking'] },
      
      // Graphs
      { title: 'Number of Islands', external_id: 'number-of-islands', difficulty: 'Medium', tags: ['Graph', 'BFS'] },
      { title: 'Clone Graph', external_id: 'clone-graph', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Pacific Atlantic Water Flow', external_id: 'pacific-atlantic-water-flow', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Course Schedule', external_id: 'course-schedule', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Alien Dictionary', external_id: 'alien-dictionary', difficulty: 'Hard', tags: ['Graph', 'Topological Sort'] },
      { title: 'Number of Connected Components in an Undirected Graph', external_id: 'number-of-connected-components-in-an-undirected-graph', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Graph Valid Tree', external_id: 'graph-valid-tree', difficulty: 'Medium', tags: ['Graph'] },
      
      // DP
      { title: 'Climbing Stairs', external_id: 'climbing-stairs', difficulty: 'Easy', tags: ['DP'] },
      { title: 'Coin Change', external_id: 'coin-change', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Increasing Subsequence', external_id: 'longest-increasing-subsequence', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Common Subsequence', external_id: 'longest-common-subsequence', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Word Break', external_id: 'word-break', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Combination Sum IV', external_id: 'combination-sum-iv', difficulty: 'Medium', tags: ['DP'] },
      { title: 'House Robber', external_id: 'house-robber', difficulty: 'Medium', tags: ['DP'] },
      { title: 'House Robber II', external_id: 'house-robber-ii', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Decode Ways', external_id: 'decode-ways', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Unique Paths', external_id: 'unique-paths', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Jump Game', external_id: 'jump-game', difficulty: 'Medium', tags: ['DP', 'Greedy'] },
      
      // Intervals
      { title: 'Insert Interval', external_id: 'insert-interval', difficulty: 'Medium', tags: ['Intervals'] },
      { title: 'Merge Intervals', external_id: 'merge-intervals', difficulty: 'Medium', tags: ['Intervals'] },
      { title: 'Non-overlapping Intervals', external_id: 'non-overlapping-intervals', difficulty: 'Medium', tags: ['Intervals'] },
      
      // Bits
      { title: 'Sum of Two Integers', external_id: 'sum-of-two-integers', difficulty: 'Medium', tags: ['Bit Manipulation'] },
      { title: 'Number of 1 Bits', external_id: 'number-of-1-bits', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Counting Bits', external_id: 'counting-bits', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Missing Number', external_id: 'missing-number', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Reverse Bits', external_id: 'reverse-bits', difficulty: 'Easy', tags: ['Bit Manipulation'] }
    ]
  },

  // Neetcode 150
  {
    id: 'neetcode150',
    title: 'NeetCode 150',
    description: 'The highly recommended roadmap covering all major topics. A superset of Blind 75.',
    problems: [
      // --- Arrays & Hashing ---
      { title: 'Contains Duplicate', external_id: 'contains-duplicate', difficulty: 'Easy', tags: ['Array', 'Hash Table'] },
      { title: 'Valid Anagram', external_id: 'valid-anagram', difficulty: 'Easy', tags: ['String', 'Hash Table'] },
      { title: 'Two Sum', external_id: 'two-sum', difficulty: 'Easy', tags: ['Array', 'Hash Table'] },
      { title: 'Group Anagrams', external_id: 'group-anagrams', difficulty: 'Medium', tags: ['Array', 'Hash Table'] },
      { title: 'Top K Frequent Elements', external_id: 'top-k-frequent-elements', difficulty: 'Medium', tags: ['Array', 'Heap'] },
      { title: 'Product of Array Except Self', external_id: 'product-of-array-except-self', difficulty: 'Medium', tags: ['Array'] },
      { title: 'Valid Sudoku', external_id: 'valid-sudoku', difficulty: 'Medium', tags: ['Array', 'Matrix'] },
      { title: 'Encode and Decode Strings', external_id: 'encode-and-decode-strings', difficulty: 'Medium', tags: ['String'] },
      { title: 'Longest Consecutive Sequence', external_id: 'longest-consecutive-sequence', difficulty: 'Medium', tags: ['Array', 'Union Find'] },
      
      // --- Two Pointers ---
      { title: 'Valid Palindrome', external_id: 'valid-palindrome', difficulty: 'Easy', tags: ['Two Pointers'] },
      { title: 'Two Sum II - Input Array Is Sorted', external_id: 'two-sum-ii-input-array-is-sorted', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: '3Sum', external_id: '3sum', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: 'Container With Most Water', external_id: 'container-with-most-water', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: 'Trapping Rain Water', external_id: 'trapping-rain-water', difficulty: 'Hard', tags: ['Two Pointers', 'Stack'] },
      
      // --- Sliding Window ---
      { title: 'Best Time to Buy and Sell Stock', external_id: 'best-time-to-buy-and-sell-stock', difficulty: 'Easy', tags: ['Sliding Window'] },
      { title: 'Longest Substring Without Repeating Characters', external_id: 'longest-substring-without-repeating-characters', difficulty: 'Medium', tags: ['Sliding Window'] },
      { title: 'Longest Repeating Character Replacement', external_id: 'longest-repeating-character-replacement', difficulty: 'Medium', tags: ['Sliding Window'] },
      { title: 'Permutation in String', external_id: 'permutation-in-string', difficulty: 'Medium', tags: ['Sliding Window'] },
      { title: 'Minimum Window Substring', external_id: 'minimum-window-substring', difficulty: 'Hard', tags: ['Sliding Window'] },
      { title: 'Sliding Window Maximum', external_id: 'sliding-window-maximum', difficulty: 'Hard', tags: ['Sliding Window', 'Heap'] },
      
      // --- Stack ---
      { title: 'Valid Parentheses', external_id: 'valid-parentheses', difficulty: 'Easy', tags: ['Stack'] },
      { title: 'Min Stack', external_id: 'min-stack', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Evaluate Reverse Polish Notation', external_id: 'evaluate-reverse-polish-notation', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Generate Parentheses', external_id: 'generate-parentheses', difficulty: 'Medium', tags: ['Stack', 'Backtracking'] },
      { title: 'Daily Temperatures', external_id: 'daily-temperatures', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Car Fleet', external_id: 'car-fleet', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Largest Rectangle in Histogram', external_id: 'largest-rectangle-in-histogram', difficulty: 'Hard', tags: ['Stack'] },
      
      // --- Binary Search ---
      { title: 'Binary Search', external_id: 'binary-search', difficulty: 'Easy', tags: ['Binary Search'] },
      { title: 'Search a 2D Matrix', external_id: 'search-a-2d-matrix', difficulty: 'Medium', tags: ['Binary Search', 'Matrix'] },
      { title: 'Koko Eating Bananas', external_id: 'koko-eating-bananas', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Find Minimum in Rotated Sorted Array', external_id: 'find-minimum-in-rotated-sorted-array', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Search in Rotated Sorted Array', external_id: 'search-in-rotated-sorted-array', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Time Based Key-Value Store', external_id: 'time-based-key-value-store', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Median of Two Sorted Arrays', external_id: 'median-of-two-sorted-arrays', difficulty: 'Hard', tags: ['Binary Search'] },
      
      // --- Linked List ---
      { title: 'Reverse Linked List', external_id: 'reverse-linked-list', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Merge Two Sorted Lists', external_id: 'merge-two-sorted-lists', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Reorder List', external_id: 'reorder-list', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Remove Nth Node From End of List', external_id: 'remove-nth-node-from-end-of-list', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Copy List with Random Pointer', external_id: 'copy-list-with-random-pointer', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Add Two Numbers', external_id: 'add-two-numbers', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Linked List Cycle', external_id: 'linked-list-cycle', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Find the Duplicate Number', external_id: 'find-the-duplicate-number', difficulty: 'Medium', tags: ['Linked List', 'Two Pointers'] },
      { title: 'LRU Cache', external_id: 'lru-cache', difficulty: 'Medium', tags: ['Linked List', 'Design'] },
      { title: 'Merge k Sorted Lists', external_id: 'merge-k-sorted-lists', difficulty: 'Hard', tags: ['Linked List', 'Heap'] },
      { title: 'Reverse Nodes in k-Group', external_id: 'reverse-nodes-in-k-group', difficulty: 'Hard', tags: ['Linked List'] },
      
      // --- Trees ---
      { title: 'Invert Binary Tree', external_id: 'invert-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Maximum Depth of Binary Tree', external_id: 'maximum-depth-of-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Diameter of Binary Tree', external_id: 'diameter-of-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Balanced Binary Tree', external_id: 'balanced-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Same Tree', external_id: 'same-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Subtree of Another Tree', external_id: 'subtree-of-another-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Lowest Common Ancestor of a BST', external_id: 'lowest-common-ancestor-of-a-binary-search-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Binary Tree Level Order Traversal', external_id: 'binary-tree-level-order-traversal', difficulty: 'Medium', tags: ['Tree', 'BFS'] },
      { title: 'Binary Tree Right Side View', external_id: 'binary-tree-right-side-view', difficulty: 'Medium', tags: ['Tree', 'BFS'] },
      { title: 'Count Good Nodes in Binary Tree', external_id: 'count-good-nodes-in-binary-tree', difficulty: 'Medium', tags: ['Tree', 'DFS'] },
      { title: 'Validate Binary Search Tree', external_id: 'validate-binary-search-tree', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Kth Smallest Element in a BST', external_id: 'kth-smallest-element-in-a-bst', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Construct Binary Tree from Preorder and Inorder Traversal', external_id: 'construct-binary-tree-from-preorder-and-inorder-traversal', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Binary Tree Maximum Path Sum', external_id: 'binary-tree-maximum-path-sum', difficulty: 'Hard', tags: ['Tree'] },
      { title: 'Serialize and Deserialize Binary Tree', external_id: 'serialize-and-deserialize-binary-tree', difficulty: 'Hard', tags: ['Tree'] },
      
      // --- Tries ---
      { title: 'Implement Trie (Prefix Tree)', external_id: 'implement-trie-prefix-tree', difficulty: 'Medium', tags: ['Trie'] },
      { title: 'Design Add and Search Words Data Structure', external_id: 'design-add-and-search-words-data-structure', difficulty: 'Medium', tags: ['Trie'] },
      { title: 'Word Search II', external_id: 'word-search-ii', difficulty: 'Hard', tags: ['Trie', 'Backtracking'] },
      
      // --- Heap / Priority Queue ---
      { title: 'Kth Largest Element in a Stream', external_id: 'kth-largest-element-in-a-stream', difficulty: 'Easy', tags: ['Heap'] },
      { title: 'Last Stone Weight', external_id: 'last-stone-weight', difficulty: 'Easy', tags: ['Heap'] },
      { title: 'K Closest Points to Origin', external_id: 'k-closest-points-to-origin', difficulty: 'Medium', tags: ['Heap'] },
      { title: 'Kth Largest Element in an Array', external_id: 'kth-largest-element-in-an-array', difficulty: 'Medium', tags: ['Heap'] },
      { title: 'Task Scheduler', external_id: 'task-scheduler', difficulty: 'Medium', tags: ['Heap', 'Greedy'] },
      { title: 'Design Twitter', external_id: 'design-twitter', difficulty: 'Medium', tags: ['Heap', 'Design'] },
      { title: 'Find Median from Data Stream', external_id: 'find-median-from-data-stream', difficulty: 'Hard', tags: ['Heap'] },
      
      // --- Backtracking ---
      { title: 'Subsets', external_id: 'subsets', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Combination Sum', external_id: 'combination-sum', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Permutations', external_id: 'permutations', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Subsets II', external_id: 'subsets-ii', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Combination Sum II', external_id: 'combination-sum-ii', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Word Search', external_id: 'word-search', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Palindrome Partitioning', external_id: 'palindrome-partitioning', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Letter Combinations of a Phone Number', external_id: 'letter-combinations-of-a-phone-number', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'N-Queens', external_id: 'n-queens', difficulty: 'Hard', tags: ['Backtracking'] },

      // --- Graphs ---
      { title: 'Number of Islands', external_id: 'number-of-islands', difficulty: 'Medium', tags: ['Graph', 'BFS'] },
      { title: 'Max Area of Island', external_id: 'max-area-of-island', difficulty: 'Medium', tags: ['Graph', 'DFS'] },
      { title: 'Clone Graph', external_id: 'clone-graph', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Walls and Gates', external_id: 'walls-and-gates', difficulty: 'Medium', tags: ['Graph', 'BFS'] },
      { title: 'Rotting Oranges', external_id: 'rotting-oranges', difficulty: 'Medium', tags: ['Graph', 'BFS'] },
      { title: 'Pacific Atlantic Water Flow', external_id: 'pacific-atlantic-water-flow', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Surrounded Regions', external_id: 'surrounded-regions', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Course Schedule', external_id: 'course-schedule', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Course Schedule II', external_id: 'course-schedule-ii', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Graph Valid Tree', external_id: 'graph-valid-tree', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Number of Connected Components in an Undirected Graph', external_id: 'number-of-connected-components-in-an-undirected-graph', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Redundant Connection', external_id: 'redundant-connection', difficulty: 'Medium', tags: ['Graph', 'Union Find'] },
      { title: 'Word Ladder', external_id: 'word-ladder', difficulty: 'Hard', tags: ['Graph', 'BFS'] },
      
      // --- Advanced Graphs ---
      { title: 'Reconstruct Itinerary', external_id: 'reconstruct-itinerary', difficulty: 'Hard', tags: ['Graph'] },
      { title: 'Min Cost to Connect All Points', external_id: 'min-cost-to-connect-all-points', difficulty: 'Medium', tags: ['Graph', 'MST'] },
      { title: 'Network Delay Time', external_id: 'network-delay-time', difficulty: 'Medium', tags: ['Graph', 'Dijkstra'] },
      { title: 'Swim in Rising Water', external_id: 'swim-in-rising-water', difficulty: 'Hard', tags: ['Graph', 'Dijkstra'] },
      { title: 'Alien Dictionary', external_id: 'alien-dictionary', difficulty: 'Hard', tags: ['Graph', 'Topological Sort'] },
      { title: 'Cheapest Flights Within K Stops', external_id: 'cheapest-flights-within-k-stops', difficulty: 'Medium', tags: ['Graph'] },
      
      // --- 1-D DP ---
      { title: 'Climbing Stairs', external_id: 'climbing-stairs', difficulty: 'Easy', tags: ['DP'] },
      { title: 'Min Cost Climbing Stairs', external_id: 'min-cost-climbing-stairs', difficulty: 'Easy', tags: ['DP'] },
      { title: 'House Robber', external_id: 'house-robber', difficulty: 'Medium', tags: ['DP'] },
      { title: 'House Robber II', external_id: 'house-robber-ii', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Palindromic Substring', external_id: 'longest-palindromic-substring', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Palindromic Substrings', external_id: 'palindromic-substrings', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Decode Ways', external_id: 'decode-ways', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Coin Change', external_id: 'coin-change', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Maximum Product Subarray', external_id: 'maximum-product-subarray', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Word Break', external_id: 'word-break', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Increasing Subsequence', external_id: 'longest-increasing-subsequence', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Partition Equal Subset Sum', external_id: 'partition-equal-subset-sum', difficulty: 'Medium', tags: ['DP'] },
      
      // --- 2-D DP ---
      { title: 'Unique Paths', external_id: 'unique-paths', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Common Subsequence', external_id: 'longest-common-subsequence', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Best Time to Buy and Sell Stock with Cooldown', external_id: 'best-time-to-buy-and-sell-stock-with-cooldown', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Coin Change II', external_id: 'coin-change-ii', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Target Sum', external_id: 'target-sum', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Interleaving String', external_id: 'interleaving-string', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Increasing Path in a Matrix', external_id: 'longest-increasing-path-in-a-matrix', difficulty: 'Hard', tags: ['DP', 'DFS'] },
      { title: 'Distinct Subsequences', external_id: 'distinct-subsequences', difficulty: 'Hard', tags: ['DP'] },
      { title: 'Edit Distance', external_id: 'edit-distance', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Burst Balloons', external_id: 'burst-balloons', difficulty: 'Hard', tags: ['DP'] },
      { title: 'Regular Expression Matching', external_id: 'regular-expression-matching', difficulty: 'Hard', tags: ['DP'] },
      
      // --- Greedy ---
      { title: 'Maximum Subarray', external_id: 'maximum-subarray', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Jump Game', external_id: 'jump-game', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Jump Game II', external_id: 'jump-game-ii', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Gas Station', external_id: 'gas-station', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Hand of Straights', external_id: 'hand-of-straights', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Merge Triplets to Form Target Triplet', external_id: 'merge-triplets-to-form-target-triplet', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Partition Labels', external_id: 'partition-labels', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Valid Parenthesis String', external_id: 'valid-parenthesis-string', difficulty: 'Medium', tags: ['Greedy'] },
      
      // --- Intervals ---
      { title: 'Insert Interval', external_id: 'insert-interval', difficulty: 'Medium', tags: ['Intervals'] },
      { title: 'Merge Intervals', external_id: 'merge-intervals', difficulty: 'Medium', tags: ['Intervals'] },
      { title: 'Non-overlapping Intervals', external_id: 'non-overlapping-intervals', difficulty: 'Medium', tags: ['Intervals'] },
      { title: 'Meeting Rooms', external_id: 'meeting-rooms', difficulty: 'Easy', tags: ['Intervals'] },
      { title: 'Meeting Rooms II', external_id: 'meeting-rooms-ii', difficulty: 'Medium', tags: ['Intervals'] },
      { title: 'Minimum Interval to Include Each Query', external_id: 'minimum-interval-to-include-each-query', difficulty: 'Hard', tags: ['Intervals'] },
      
      // --- Math & Geometry ---
      { title: 'Rotate Image', external_id: 'rotate-image', difficulty: 'Medium', tags: ['Matrix'] },
      { title: 'Spiral Matrix', external_id: 'spiral-matrix', difficulty: 'Medium', tags: ['Matrix'] },
      { title: 'Set Matrix Zeroes', external_id: 'set-matrix-zeroes', difficulty: 'Medium', tags: ['Matrix'] },
      { title: 'Happy Number', external_id: 'happy-number', difficulty: 'Easy', tags: ['Math'] },
      { title: 'Plus One', external_id: 'plus-one', difficulty: 'Easy', tags: ['Math'] },
      { title: 'Pow(x, n)', external_id: 'powx-n', difficulty: 'Medium', tags: ['Math'] },
      { title: 'Multiply Strings', external_id: 'multiply-strings', difficulty: 'Medium', tags: ['Math'] },
      { title: 'Detect Squares', external_id: 'detect-squares', difficulty: 'Medium', tags: ['Geometry'] },
      
      // --- Bit Manipulation ---
      { title: 'Single Number', external_id: 'single-number', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Number of 1 Bits', external_id: 'number-of-1-bits', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Counting Bits', external_id: 'counting-bits', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Reverse Bits', external_id: 'reverse-bits', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Missing Number', external_id: 'missing-number', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Sum of Two Integers', external_id: 'sum-of-two-integers', difficulty: 'Medium', tags: ['Bit Manipulation'] },
      { title: 'Reverse Integer', external_id: 'reverse-integer', difficulty: 'Medium', tags: ['Bit Manipulation'] }
    ]
  },

// --- 3. NEETCODE 250 (Beginner Friendly / Comprehensive) ---
  {
    id: 'neetcode250',
    title: 'NeetCode 250',
    description: 'The ultimate beginner roadmap. Includes the NeetCode 150 plus 100 fundamental problems to build muscle memory.',
    problems: [
      // === NEW: FOUNDATIONS (The "Extra 100" Easy Problems) ===
      
      // --- Arrays & Strings (Basics) ---
      { title: 'Concatenation of Array', external_id: 'concatenation-of-array', difficulty: 'Easy', tags: ['Array'] },
      { title: 'Replace Elements with Greatest Element on Right Side', external_id: 'replace-elements-with-greatest-element-on-right-side', difficulty: 'Easy', tags: ['Array'] },
      { title: 'Is Subsequence', external_id: 'is-subsequence', difficulty: 'Easy', tags: ['String', 'Two Pointers'] },
      { title: 'Length of Last Word', external_id: 'length-of-last-word', difficulty: 'Easy', tags: ['String'] },
      { title: 'Longest Common Prefix', external_id: 'longest-common-prefix', difficulty: 'Easy', tags: ['String'] },
      { title: 'Pascals Triangle', external_id: 'pascals-triangle', difficulty: 'Easy', tags: ['Array', 'DP'] },
      { title: 'Remove Element', external_id: 'remove-element', difficulty: 'Easy', tags: ['Array', 'Two Pointers'] },
      { title: 'Unique Email Addresses', external_id: 'unique-email-addresses', difficulty: 'Easy', tags: ['String', 'Hash Table'] },
      { title: 'Isomorphic Strings', external_id: 'isomorphic-strings', difficulty: 'Easy', tags: ['String', 'Hash Table'] },
      { title: 'Can Place Flowers', external_id: 'can-place-flowers', difficulty: 'Easy', tags: ['Array', 'Greedy'] },
      { title: 'Majority Element', external_id: 'majority-element', difficulty: 'Easy', tags: ['Array', 'Hash Table'] },
      { title: 'Next Greater Element I', external_id: 'next-greater-element-i', difficulty: 'Easy', tags: ['Stack', 'Array'] },
      { title: 'Find Pivot Index', external_id: 'find-pivot-index', difficulty: 'Easy', tags: ['Array', 'Prefix Sum'] },
      { title: 'Range Sum Query - Immutable', external_id: 'range-sum-query-immutable', difficulty: 'Easy', tags: ['Array', 'Prefix Sum'] },
      { title: 'Find All Numbers Disappeared in an Array', external_id: 'find-all-numbers-disappeared-in-an-array', difficulty: 'Easy', tags: ['Array'] },
      { title: 'Word Pattern', external_id: 'word-pattern', difficulty: 'Easy', tags: ['Hash Table', 'String'] },
      { title: 'Valid Anagram', external_id: 'valid-anagram', difficulty: 'Easy', tags: ['String', 'Hash Table'] },
      { title: 'Contains Duplicate', external_id: 'contains-duplicate', difficulty: 'Easy', tags: ['Array', 'Hash Table'] },
      
      // --- Linked List & Recursion (Basics) ---
      { title: 'Merge Two Sorted Lists', external_id: 'merge-two-sorted-lists', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Reverse Linked List', external_id: 'reverse-linked-list', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Palindrome Linked List', external_id: 'palindrome-linked-list', difficulty: 'Easy', tags: ['Linked List', 'Two Pointers'] },
      { title: 'Remove Duplicates from Sorted List', external_id: 'remove-duplicates-from-sorted-list', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Intersection of Two Linked Lists', external_id: 'intersection-of-two-linked-lists', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Fibonacci Number', external_id: 'fibonacci-number', difficulty: 'Easy', tags: ['Math', 'DP'] },
      { title: 'Climbing Stairs', external_id: 'climbing-stairs', difficulty: 'Easy', tags: ['DP'] },
      
      // --- Trees (Basics) ---
      { title: 'Invert Binary Tree', external_id: 'invert-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Maximum Depth of Binary Tree', external_id: 'maximum-depth-of-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Same Tree', external_id: 'same-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Symmetric Tree', external_id: 'symmetric-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Path Sum', external_id: 'path-sum', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Merge Two Binary Trees', external_id: 'merge-two-binary-trees', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Convert Sorted Array to Binary Search Tree', external_id: 'convert-sorted-array-to-binary-search-tree', difficulty: 'Easy', tags: ['Tree', 'Binary Search'] },
      
      // --- Stacks & Queues (Design) ---
      { title: 'Implement Queue using Stacks', external_id: 'implement-queue-using-stacks', difficulty: 'Easy', tags: ['Stack', 'Design'] },
      { title: 'Implement Stack using Queues', external_id: 'implement-stack-using-queues', difficulty: 'Easy', tags: ['Queue', 'Design'] },
      { title: 'Min Stack', external_id: 'min-stack', difficulty: 'Medium', tags: ['Stack', 'Design'] },
      { title: 'Design HashMap', external_id: 'design-hashmap', difficulty: 'Easy', tags: ['Hash Table', 'Design'] },
      { title: 'Design HashSet', external_id: 'design-hashset', difficulty: 'Easy', tags: ['Hash Table', 'Design'] },
      
      // --- Binary Search (Basics) ---
      { title: 'Binary Search', external_id: 'binary-search', difficulty: 'Easy', tags: ['Binary Search'] },
      { title: 'First Bad Version', external_id: 'first-bad-version', difficulty: 'Easy', tags: ['Binary Search'] },
      { title: 'Search Insert Position', external_id: 'search-insert-position', difficulty: 'Easy', tags: ['Binary Search'] },
      { title: 'Guess Number Higher or Lower', external_id: 'guess-number-higher-or-lower', difficulty: 'Easy', tags: ['Binary Search'] },
      { title: 'Arranging Coins', external_id: 'arranging-coins', difficulty: 'Easy', tags: ['Binary Search', 'Math'] },
      
      // --- Heap (Basics) ---
      { title: 'Kth Largest Element in a Stream', external_id: 'kth-largest-element-in-a-stream', difficulty: 'Easy', tags: ['Heap'] },
      { title: 'Last Stone Weight', external_id: 'last-stone-weight', difficulty: 'Easy', tags: ['Heap'] },
      
      // --- Bits & Math (Basics) ---
      { title: 'Single Number', external_id: 'single-number', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Number of 1 Bits', external_id: 'number-of-1-bits', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Counting Bits', external_id: 'counting-bits', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Reverse Bits', external_id: 'reverse-bits', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Missing Number', external_id: 'missing-number', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Happy Number', external_id: 'happy-number', difficulty: 'Easy', tags: ['Math'] },
      { title: 'Plus One', external_id: 'plus-one', difficulty: 'Easy', tags: ['Math'] },

      // === INCLUDES ALL NEETCODE 150 (Core List) ===
      
      // --- Arrays & Hashing ---
      { title: 'Two Sum', external_id: 'two-sum', difficulty: 'Easy', tags: ['Array', 'Hash Table'] },
      { title: 'Group Anagrams', external_id: 'group-anagrams', difficulty: 'Medium', tags: ['Array', 'Hash Table'] },
      { title: 'Top K Frequent Elements', external_id: 'top-k-frequent-elements', difficulty: 'Medium', tags: ['Array', 'Heap'] },
      { title: 'Product of Array Except Self', external_id: 'product-of-array-except-self', difficulty: 'Medium', tags: ['Array'] },
      { title: 'Valid Sudoku', external_id: 'valid-sudoku', difficulty: 'Medium', tags: ['Array', 'Matrix'] },
      { title: 'Encode and Decode Strings', external_id: 'encode-and-decode-strings', difficulty: 'Medium', tags: ['String'] },
      { title: 'Longest Consecutive Sequence', external_id: 'longest-consecutive-sequence', difficulty: 'Medium', tags: ['Array', 'Union Find'] },
      
      // --- Two Pointers ---
      { title: 'Valid Palindrome', external_id: 'valid-palindrome', difficulty: 'Easy', tags: ['Two Pointers'] },
      { title: 'Two Sum II - Input Array Is Sorted', external_id: 'two-sum-ii-input-array-is-sorted', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: '3Sum', external_id: '3sum', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: 'Container With Most Water', external_id: 'container-with-most-water', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: 'Trapping Rain Water', external_id: 'trapping-rain-water', difficulty: 'Hard', tags: ['Two Pointers', 'Stack'] },
      
      // --- Sliding Window ---
      { title: 'Best Time to Buy and Sell Stock', external_id: 'best-time-to-buy-and-sell-stock', difficulty: 'Easy', tags: ['Sliding Window'] },
      { title: 'Longest Substring Without Repeating Characters', external_id: 'longest-substring-without-repeating-characters', difficulty: 'Medium', tags: ['Sliding Window'] },
      { title: 'Longest Repeating Character Replacement', external_id: 'longest-repeating-character-replacement', difficulty: 'Medium', tags: ['Sliding Window'] },
      { title: 'Permutation in String', external_id: 'permutation-in-string', difficulty: 'Medium', tags: ['Sliding Window'] },
      { title: 'Minimum Window Substring', external_id: 'minimum-window-substring', difficulty: 'Hard', tags: ['Sliding Window'] },
      { title: 'Sliding Window Maximum', external_id: 'sliding-window-maximum', difficulty: 'Hard', tags: ['Sliding Window', 'Heap'] },
      
      // --- Stack ---
      { title: 'Valid Parentheses', external_id: 'valid-parentheses', difficulty: 'Easy', tags: ['Stack'] },
      { title: 'Evaluate Reverse Polish Notation', external_id: 'evaluate-reverse-polish-notation', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Generate Parentheses', external_id: 'generate-parentheses', difficulty: 'Medium', tags: ['Stack', 'Backtracking'] },
      { title: 'Daily Temperatures', external_id: 'daily-temperatures', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Car Fleet', external_id: 'car-fleet', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Largest Rectangle in Histogram', external_id: 'largest-rectangle-in-histogram', difficulty: 'Hard', tags: ['Stack'] },
      
      // --- Binary Search ---
      { title: 'Search a 2D Matrix', external_id: 'search-a-2d-matrix', difficulty: 'Medium', tags: ['Binary Search', 'Matrix'] },
      { title: 'Koko Eating Bananas', external_id: 'koko-eating-bananas', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Find Minimum in Rotated Sorted Array', external_id: 'find-minimum-in-rotated-sorted-array', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Search in Rotated Sorted Array', external_id: 'search-in-rotated-sorted-array', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Time Based Key-Value Store', external_id: 'time-based-key-value-store', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Median of Two Sorted Arrays', external_id: 'median-of-two-sorted-arrays', difficulty: 'Hard', tags: ['Binary Search'] },
      
      // --- Linked List ---
      { title: 'Reorder List', external_id: 'reorder-list', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Remove Nth Node From End of List', external_id: 'remove-nth-node-from-end-of-list', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Copy List with Random Pointer', external_id: 'copy-list-with-random-pointer', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Add Two Numbers', external_id: 'add-two-numbers', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Linked List Cycle', external_id: 'linked-list-cycle', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Find the Duplicate Number', external_id: 'find-the-duplicate-number', difficulty: 'Medium', tags: ['Linked List', 'Two Pointers'] },
      { title: 'LRU Cache', external_id: 'lru-cache', difficulty: 'Medium', tags: ['Linked List', 'Design'] },
      { title: 'Merge k Sorted Lists', external_id: 'merge-k-sorted-lists', difficulty: 'Hard', tags: ['Linked List', 'Heap'] },
      { title: 'Reverse Nodes in k-Group', external_id: 'reverse-nodes-in-k-group', difficulty: 'Hard', tags: ['Linked List'] },
      
      // --- Trees ---
      { title: 'Diameter of Binary Tree', external_id: 'diameter-of-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Balanced Binary Tree', external_id: 'balanced-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Subtree of Another Tree', external_id: 'subtree-of-another-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Lowest Common Ancestor of a BST', external_id: 'lowest-common-ancestor-of-a-binary-search-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Binary Tree Level Order Traversal', external_id: 'binary-tree-level-order-traversal', difficulty: 'Medium', tags: ['Tree', 'BFS'] },
      { title: 'Binary Tree Right Side View', external_id: 'binary-tree-right-side-view', difficulty: 'Medium', tags: ['Tree', 'BFS'] },
      { title: 'Count Good Nodes in Binary Tree', external_id: 'count-good-nodes-in-binary-tree', difficulty: 'Medium', tags: ['Tree', 'DFS'] },
      { title: 'Validate Binary Search Tree', external_id: 'validate-binary-search-tree', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Kth Smallest Element in a BST', external_id: 'kth-smallest-element-in-a-bst', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Construct Binary Tree from Preorder and Inorder Traversal', external_id: 'construct-binary-tree-from-preorder-and-inorder-traversal', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Binary Tree Maximum Path Sum', external_id: 'binary-tree-maximum-path-sum', difficulty: 'Hard', tags: ['Tree'] },
      { title: 'Serialize and Deserialize Binary Tree', external_id: 'serialize-and-deserialize-binary-tree', difficulty: 'Hard', tags: ['Tree'] },
      
      // --- Tries ---
      { title: 'Implement Trie (Prefix Tree)', external_id: 'implement-trie-prefix-tree', difficulty: 'Medium', tags: ['Trie'] },
      { title: 'Design Add and Search Words Data Structure', external_id: 'design-add-and-search-words-data-structure', difficulty: 'Medium', tags: ['Trie'] },
      { title: 'Word Search II', external_id: 'word-search-ii', difficulty: 'Hard', tags: ['Trie', 'Backtracking'] },
      
      // --- Heap / Priority Queue ---
      { title: 'K Closest Points to Origin', external_id: 'k-closest-points-to-origin', difficulty: 'Medium', tags: ['Heap'] },
      { title: 'Kth Largest Element in an Array', external_id: 'kth-largest-element-in-an-array', difficulty: 'Medium', tags: ['Heap'] },
      { title: 'Task Scheduler', external_id: 'task-scheduler', difficulty: 'Medium', tags: ['Heap', 'Greedy'] },
      { title: 'Design Twitter', external_id: 'design-twitter', difficulty: 'Medium', tags: ['Heap', 'Design'] },
      { title: 'Find Median from Data Stream', external_id: 'find-median-from-data-stream', difficulty: 'Hard', tags: ['Heap'] },
      
      // --- Backtracking ---
      { title: 'Subsets', external_id: 'subsets', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Combination Sum', external_id: 'combination-sum', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Permutations', external_id: 'permutations', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Subsets II', external_id: 'subsets-ii', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Combination Sum II', external_id: 'combination-sum-ii', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Word Search', external_id: 'word-search', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Palindrome Partitioning', external_id: 'palindrome-partitioning', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Letter Combinations of a Phone Number', external_id: 'letter-combinations-of-a-phone-number', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'N-Queens', external_id: 'n-queens', difficulty: 'Hard', tags: ['Backtracking'] },

      // --- Graphs ---
      { title: 'Number of Islands', external_id: 'number-of-islands', difficulty: 'Medium', tags: ['Graph', 'BFS'] },
      { title: 'Max Area of Island', external_id: 'max-area-of-island', difficulty: 'Medium', tags: ['Graph', 'DFS'] },
      { title: 'Clone Graph', external_id: 'clone-graph', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Walls and Gates', external_id: 'walls-and-gates', difficulty: 'Medium', tags: ['Graph', 'BFS'] },
      { title: 'Rotting Oranges', external_id: 'rotting-oranges', difficulty: 'Medium', tags: ['Graph', 'BFS'] },
      { title: 'Pacific Atlantic Water Flow', external_id: 'pacific-atlantic-water-flow', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Surrounded Regions', external_id: 'surrounded-regions', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Course Schedule', external_id: 'course-schedule', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Course Schedule II', external_id: 'course-schedule-ii', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Graph Valid Tree', external_id: 'graph-valid-tree', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Number of Connected Components in an Undirected Graph', external_id: 'number-of-connected-components-in-an-undirected-graph', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Redundant Connection', external_id: 'redundant-connection', difficulty: 'Medium', tags: ['Graph', 'Union Find'] },
      { title: 'Word Ladder', external_id: 'word-ladder', difficulty: 'Hard', tags: ['Graph', 'BFS'] },
      
      // --- Advanced Graphs ---
      { title: 'Reconstruct Itinerary', external_id: 'reconstruct-itinerary', difficulty: 'Hard', tags: ['Graph'] },
      { title: 'Min Cost to Connect All Points', external_id: 'min-cost-to-connect-all-points', difficulty: 'Medium', tags: ['Graph', 'MST'] },
      { title: 'Network Delay Time', external_id: 'network-delay-time', difficulty: 'Medium', tags: ['Graph', 'Dijkstra'] },
      { title: 'Swim in Rising Water', external_id: 'swim-in-rising-water', difficulty: 'Hard', tags: ['Graph', 'Dijkstra'] },
      { title: 'Alien Dictionary', external_id: 'alien-dictionary', difficulty: 'Hard', tags: ['Graph', 'Topological Sort'] },
      { title: 'Cheapest Flights Within K Stops', external_id: 'cheapest-flights-within-k-stops', difficulty: 'Medium', tags: ['Graph'] },
      
      // --- 1-D DP ---
      { title: 'Min Cost Climbing Stairs', external_id: 'min-cost-climbing-stairs', difficulty: 'Easy', tags: ['DP'] },
      { title: 'House Robber', external_id: 'house-robber', difficulty: 'Medium', tags: ['DP'] },
      { title: 'House Robber II', external_id: 'house-robber-ii', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Palindromic Substring', external_id: 'longest-palindromic-substring', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Palindromic Substrings', external_id: 'palindromic-substrings', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Decode Ways', external_id: 'decode-ways', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Coin Change', external_id: 'coin-change', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Maximum Product Subarray', external_id: 'maximum-product-subarray', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Word Break', external_id: 'word-break', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Increasing Subsequence', external_id: 'longest-increasing-subsequence', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Partition Equal Subset Sum', external_id: 'partition-equal-subset-sum', difficulty: 'Medium', tags: ['DP'] },
      
      // --- 2-D DP ---
      { title: 'Unique Paths', external_id: 'unique-paths', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Common Subsequence', external_id: 'longest-common-subsequence', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Best Time to Buy and Sell Stock with Cooldown', external_id: 'best-time-to-buy-and-sell-stock-with-cooldown', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Coin Change II', external_id: 'coin-change-ii', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Target Sum', external_id: 'target-sum', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Interleaving String', external_id: 'interleaving-string', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Increasing Path in a Matrix', external_id: 'longest-increasing-path-in-a-matrix', difficulty: 'Hard', tags: ['DP', 'DFS'] },
      { title: 'Distinct Subsequences', external_id: 'distinct-subsequences', difficulty: 'Hard', tags: ['DP'] },
      { title: 'Edit Distance', external_id: 'edit-distance', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Burst Balloons', external_id: 'burst-balloons', difficulty: 'Hard', tags: ['DP'] },
      { title: 'Regular Expression Matching', external_id: 'regular-expression-matching', difficulty: 'Hard', tags: ['DP'] },
      
      // --- Greedy ---
      { title: 'Maximum Subarray', external_id: 'maximum-subarray', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Jump Game', external_id: 'jump-game', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Jump Game II', external_id: 'jump-game-ii', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Gas Station', external_id: 'gas-station', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Hand of Straights', external_id: 'hand-of-straights', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Merge Triplets to Form Target Triplet', external_id: 'merge-triplets-to-form-target-triplet', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Partition Labels', external_id: 'partition-labels', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Valid Parenthesis String', external_id: 'valid-parenthesis-string', difficulty: 'Medium', tags: ['Greedy'] },
      
      // --- Intervals ---
      { title: 'Insert Interval', external_id: 'insert-interval', difficulty: 'Medium', tags: ['Intervals'] },
      { title: 'Merge Intervals', external_id: 'merge-intervals', difficulty: 'Medium', tags: ['Intervals'] },
      { title: 'Non-overlapping Intervals', external_id: 'non-overlapping-intervals', difficulty: 'Medium', tags: ['Intervals'] },
      { title: 'Meeting Rooms', external_id: 'meeting-rooms', difficulty: 'Easy', tags: ['Intervals'] },
      { title: 'Meeting Rooms II', external_id: 'meeting-rooms-ii', difficulty: 'Medium', tags: ['Intervals'] },
      { title: 'Minimum Interval to Include Each Query', external_id: 'minimum-interval-to-include-each-query', difficulty: 'Hard', tags: ['Intervals'] },
      
      // --- Math & Geometry ---
      { title: 'Rotate Image', external_id: 'rotate-image', difficulty: 'Medium', tags: ['Matrix'] },
      { title: 'Spiral Matrix', external_id: 'spiral-matrix', difficulty: 'Medium', tags: ['Matrix'] },
      { title: 'Set Matrix Zeroes', external_id: 'set-matrix-zeroes', difficulty: 'Medium', tags: ['Matrix'] },
      { title: 'Pow(x, n)', external_id: 'powx-n', difficulty: 'Medium', tags: ['Math'] },
      { title: 'Multiply Strings', external_id: 'multiply-strings', difficulty: 'Medium', tags: ['Math'] },
      { title: 'Detect Squares', external_id: 'detect-squares', difficulty: 'Medium', tags: ['Geometry'] },
      
      // --- Bit Manipulation ---
      { title: 'Sum of Two Integers', external_id: 'sum-of-two-integers', difficulty: 'Medium', tags: ['Bit Manipulation'] },
      { title: 'Reverse Integer', external_id: 'reverse-integer', difficulty: 'Medium', tags: ['Bit Manipulation'] }
    ]
  },

  // --- 4. TOP 100 LIKED (Popular Vote) ---
  {
    id: 'top100',
    title: 'Top 100 Liked',
    description: 'The most popular problems on LeetCode by community vote. Good for random practice.',
    problems: [
      // --- Easy ---
      { title: 'Two Sum', external_id: 'two-sum', difficulty: 'Easy', tags: ['Array', 'Hash Table'] },
      { title: 'Valid Parentheses', external_id: 'valid-parentheses', difficulty: 'Easy', tags: ['Stack'] },
      { title: 'Merge Two Sorted Lists', external_id: 'merge-two-sorted-lists', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Best Time to Buy and Sell Stock', external_id: 'best-time-to-buy-and-sell-stock', difficulty: 'Easy', tags: ['Array', 'DP'] },
      { title: 'Valid Palindrome', external_id: 'valid-palindrome', difficulty: 'Easy', tags: ['String', 'Two Pointers'] },
      { title: 'Invert Binary Tree', external_id: 'invert-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Symmetric Tree', external_id: 'symmetric-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Maximum Depth of Binary Tree', external_id: 'maximum-depth-of-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Diameter of Binary Tree', external_id: 'diameter-of-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Reverse Linked List', external_id: 'reverse-linked-list', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Majority Element', external_id: 'majority-element', difficulty: 'Easy', tags: ['Array'] },
      { title: 'Move Zeroes', external_id: 'move-zeroes', difficulty: 'Easy', tags: ['Array', 'Two Pointers'] },
      { title: 'Climbing Stairs', external_id: 'climbing-stairs', difficulty: 'Easy', tags: ['DP'] },
      { title: 'Single Number', external_id: 'single-number', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Palindrome Number', external_id: 'palindrome-number', difficulty: 'Easy', tags: ['Math'] },
      { title: 'Roman to Integer', external_id: 'roman-to-integer', difficulty: 'Easy', tags: ['Math', 'String'] },
      { title: 'Longest Common Prefix', external_id: 'longest-common-prefix', difficulty: 'Easy', tags: ['String'] },
      { title: 'Pascal\'s Triangle', external_id: 'pascals-triangle', difficulty: 'Easy', tags: ['Array', 'DP'] },
      { title: 'Intersection of Two Linked Lists', external_id: 'intersection-of-two-linked-lists', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Missing Number', external_id: 'missing-number', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Palindrome Linked List', external_id: 'palindrome-linked-list', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Search Insert Position', external_id: 'search-insert-position', difficulty: 'Easy', tags: ['Binary Search'] },
      { title: 'Merge Two Binary Trees', external_id: 'merge-two-binary-trees', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Path Sum', external_id: 'path-sum', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Min Stack', external_id: 'min-stack', difficulty: 'Easy', tags: ['Stack'] },
      { title: 'Linked List Cycle', external_id: 'linked-list-cycle', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Binary Tree Inorder Traversal', external_id: 'binary-tree-inorder-traversal', difficulty: 'Easy', tags: ['Tree', 'DFS'] },
      { title: 'Counting Bits', external_id: 'counting-bits', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Hamming Distance', external_id: 'hamming-distance', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      
      // --- Medium ---
      { title: 'Add Two Numbers', external_id: 'add-two-numbers', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Longest Substring Without Repeating Characters', external_id: 'longest-substring-without-repeating-characters', difficulty: 'Medium', tags: ['Sliding Window'] },
      { title: 'Longest Palindromic Substring', external_id: 'longest-palindromic-substring', difficulty: 'Medium', tags: ['DP', 'String'] },
      { title: 'Container With Most Water', external_id: 'container-with-most-water', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: '3Sum', external_id: '3sum', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: 'Letter Combinations of a Phone Number', external_id: 'letter-combinations-of-a-phone-number', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Remove Nth Node From End of List', external_id: 'remove-nth-node-from-end-of-list', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Generate Parentheses', external_id: 'generate-parentheses', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Next Permutation', external_id: 'next-permutation', difficulty: 'Medium', tags: ['Array'] },
      { title: 'Search in Rotated Sorted Array', external_id: 'search-in-rotated-sorted-array', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Find First and Last Position of Element in Sorted Array', external_id: 'find-first-and-last-position-of-element-in-sorted-array', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Combination Sum', external_id: 'combination-sum', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Permutations', external_id: 'permutations', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Rotate Image', external_id: 'rotate-image', difficulty: 'Medium', tags: ['Matrix'] },
      { title: 'Group Anagrams', external_id: 'group-anagrams', difficulty: 'Medium', tags: ['Hash Table'] },
      { title: 'Maximum Subarray', external_id: 'maximum-subarray', difficulty: 'Medium', tags: ['DP', 'Array'] },
      { title: 'Jump Game', external_id: 'jump-game', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Jump Game II', external_id: 'jump-game-ii', difficulty: 'Medium', tags: ['Greedy'] },
      { title: 'Merge Intervals', external_id: 'merge-intervals', difficulty: 'Medium', tags: ['Intervals'] },
      { title: 'Unique Paths', external_id: 'unique-paths', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Minimum Path Sum', external_id: 'minimum-path-sum', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Sort Colors', external_id: 'sort-colors', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: 'Subsets', external_id: 'subsets', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Word Search', external_id: 'word-search', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Validate Binary Search Tree', external_id: 'validate-binary-search-tree', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Binary Tree Level Order Traversal', external_id: 'binary-tree-level-order-traversal', difficulty: 'Medium', tags: ['Tree', 'BFS'] },
      { title: 'Construct Binary Tree from Preorder and Inorder Traversal', external_id: 'construct-binary-tree-from-preorder-and-inorder-traversal', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Flatten Binary Tree to Linked List', external_id: 'flatten-binary-tree-to-linked-list', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Word Break', external_id: 'word-break', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Linked List Cycle II', external_id: 'linked-list-cycle-ii', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'LRU Cache', external_id: 'lru-cache', difficulty: 'Medium', tags: ['Design', 'Linked List'] },
      { title: 'Sort List', external_id: 'sort-list', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Product of Array Except Self', external_id: 'product-of-array-except-self', difficulty: 'Medium', tags: ['Array'] },
      { title: 'Number of Islands', external_id: 'number-of-islands', difficulty: 'Medium', tags: ['Graph', 'BFS'] },
      { title: 'Course Schedule', external_id: 'course-schedule', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Implement Trie (Prefix Tree)', external_id: 'implement-trie-prefix-tree', difficulty: 'Medium', tags: ['Trie'] },
      { title: 'Kth Largest Element in an Array', external_id: 'kth-largest-element-in-an-array', difficulty: 'Medium', tags: ['Heap'] },
      { title: 'Maximal Square', external_id: 'maximal-square', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Lowest Common Ancestor of a Binary Tree', external_id: 'lowest-common-ancestor-of-a-binary-tree', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Product of Array Except Self', external_id: 'product-of-array-except-self', difficulty: 'Medium', tags: ['Array'] },
      { title: 'Find the Duplicate Number', external_id: 'find-the-duplicate-number', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: 'Longest Increasing Subsequence', external_id: 'longest-increasing-subsequence', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Coin Change', external_id: 'coin-change', difficulty: 'Medium', tags: ['DP'] },
      { title: 'House Robber', external_id: 'house-robber', difficulty: 'Medium', tags: ['DP'] },
      { title: 'House Robber III', external_id: 'house-robber-iii', difficulty: 'Medium', tags: ['DP', 'Tree'] },
      { title: 'Top K Frequent Elements', external_id: 'top-k-frequent-elements', difficulty: 'Medium', tags: ['Heap'] },
      { title: 'Decode String', external_id: 'decode-string', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Partition Equal Subset Sum', external_id: 'partition-equal-subset-sum', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Path Sum III', external_id: 'path-sum-iii', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Find All Anagrams in a String', external_id: 'find-all-anagrams-in-a-string', difficulty: 'Medium', tags: ['Sliding Window'] },
      { title: 'Target Sum', external_id: 'target-sum', difficulty: 'Medium', tags: ['DP', 'DFS'] },
      { title: 'Subarray Sum Equals K', external_id: 'subarray-sum-equals-k', difficulty: 'Medium', tags: ['Array', 'Hash Table'] },
      { title: 'Shortest Unsorted Continuous Subarray', external_id: 'shortest-unsorted-continuous-subarray', difficulty: 'Medium', tags: ['Array'] },
      { title: 'Task Scheduler', external_id: 'task-scheduler', difficulty: 'Medium', tags: ['Heap', 'Greedy'] },
      { title: 'Palindromic Substrings', external_id: 'palindromic-substrings', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Daily Temperatures', external_id: 'daily-temperatures', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'K Closest Points to Origin', external_id: 'k-closest-points-to-origin', difficulty: 'Medium', tags: ['Heap'] },
      { title: 'Longest Consecutive Sequence', external_id: 'longest-consecutive-sequence', difficulty: 'Medium', tags: ['Union Find'] },
      
      // --- Hard ---
      { title: 'Median of Two Sorted Arrays', external_id: 'median-of-two-sorted-arrays', difficulty: 'Hard', tags: ['Binary Search'] },
      { title: 'Regular Expression Matching', external_id: 'regular-expression-matching', difficulty: 'Hard', tags: ['DP'] },
      { title: 'Merge k Sorted Lists', external_id: 'merge-k-sorted-lists', difficulty: 'Hard', tags: ['Heap', 'Linked List'] },
      { title: 'Reverse Nodes in k-Group', external_id: 'reverse-nodes-in-k-group', difficulty: 'Hard', tags: ['Linked List'] },
      { title: 'Longest Valid Parentheses', external_id: 'longest-valid-parentheses', difficulty: 'Hard', tags: ['Stack', 'DP'] },
      { title: 'Trapping Rain Water', external_id: 'trapping-rain-water', difficulty: 'Hard', tags: ['Two Pointers'] },
      { title: 'Edit Distance', external_id: 'edit-distance', difficulty: 'Hard', tags: ['DP'] },
      { title: 'Largest Rectangle in Histogram', external_id: 'largest-rectangle-in-histogram', difficulty: 'Hard', tags: ['Stack'] },
      { title: 'Maximal Rectangle', external_id: 'maximal-rectangle', difficulty: 'Hard', tags: ['Stack', 'DP'] },
      { title: 'Binary Tree Maximum Path Sum', external_id: 'binary-tree-maximum-path-sum', difficulty: 'Hard', tags: ['Tree'] },
      { title: 'Sliding Window Maximum', external_id: 'sliding-window-maximum', difficulty: 'Hard', tags: ['Sliding Window', 'Heap'] },
      { title: 'Serialize and Deserialize Binary Tree', external_id: 'serialize-and-deserialize-binary-tree', difficulty: 'Hard', tags: ['Tree'] },
      { title: 'Minimum Window Substring', external_id: 'minimum-window-substring', difficulty: 'Hard', tags: ['Sliding Window'] },
      { title: 'Find Median from Data Stream', external_id: 'find-median-from-data-stream', difficulty: 'Hard', tags: ['Heap'] },
      { title: 'First Missing Positive', external_id: 'first-missing-positive', difficulty: 'Hard', tags: ['Array'] }
    ]
  },

// --- 5. STRIVER SDE SHEET (The FAANG Blueprint) ---
  {
    id: 'striver',
    title: 'Striver SDE Sheet',
    description: 'The most popular structured list for cracking top product-based company interviews (FAANG).',
    problems: [
      // --- Day 1: Arrays ---
      { title: 'Set Matrix Zeroes', external_id: 'set-matrix-zeroes', difficulty: 'Medium', tags: ['Array', 'Matrix'] },
      { title: 'Pascals Triangle', external_id: 'pascals-triangle', difficulty: 'Easy', tags: ['Array', 'DP'] },
      { title: 'Next Permutation', external_id: 'next-permutation', difficulty: 'Medium', tags: ['Array', 'Two Pointers'] },
      { title: 'Maximum Subarray (Kadane)', external_id: 'maximum-subarray', difficulty: 'Medium', tags: ['Array', 'DP'] },
      { title: 'Sort Colors', external_id: 'sort-colors', difficulty: 'Medium', tags: ['Array', 'Two Pointers'] },
      { title: 'Best Time to Buy and Sell Stock', external_id: 'best-time-to-buy-and-sell-stock', difficulty: 'Easy', tags: ['Array', 'DP'] },

      // --- Day 2: Arrays II ---
      { title: 'Rotate Image', external_id: 'rotate-image', difficulty: 'Medium', tags: ['Array', 'Matrix'] },
      { title: 'Merge Intervals', external_id: 'merge-intervals', difficulty: 'Medium', tags: ['Array', 'Intervals'] },
      { title: 'Merge Sorted Array', external_id: 'merge-sorted-array', difficulty: 'Easy', tags: ['Array', 'Two Pointers'] },
      { title: 'Find the Duplicate Number', external_id: 'find-the-duplicate-number', difficulty: 'Medium', tags: ['Array', 'Two Pointers'] },
      { title: 'Repeat and Missing Number Array', external_id: 'missing-number', difficulty: 'Easy', tags: ['Array', 'Math'] }, // Note: Leetcode has "Missing Number", "Set Mismatch" covers repeat/missing
      
      // --- Day 3: Arrays III ---
      { title: 'Search a 2D Matrix', external_id: 'search-a-2d-matrix', difficulty: 'Medium', tags: ['Array', 'Binary Search'] },
      { title: 'Pow(x, n)', external_id: 'powx-n', difficulty: 'Medium', tags: ['Math'] },
      { title: 'Majority Element', external_id: 'majority-element', difficulty: 'Easy', tags: ['Array'] },
      { title: 'Majority Element II', external_id: 'majority-element-ii', difficulty: 'Medium', tags: ['Array'] },
      { title: 'Unique Paths', external_id: 'unique-paths', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Reverse Pairs', external_id: 'reverse-pairs', difficulty: 'Hard', tags: ['Array', 'Divide and Conquer'] },

      // --- Day 4: Arrays IV ---
      { title: 'Two Sum', external_id: 'two-sum', difficulty: 'Easy', tags: ['Array', 'Hash Table'] },
      { title: '4Sum', external_id: '4sum', difficulty: 'Medium', tags: ['Array', 'Two Pointers'] },
      { title: 'Longest Consecutive Sequence', external_id: 'longest-consecutive-sequence', difficulty: 'Medium', tags: ['Array', 'Union Find'] },
      { title: 'Longest Substring Without Repeating Characters', external_id: 'longest-substring-without-repeating-characters', difficulty: 'Medium', tags: ['String', 'Sliding Window'] },
      { title: 'Subarray Sum Equals K', external_id: 'subarray-sum-equals-k', difficulty: 'Medium', tags: ['Array', 'Hash Table'] },

      // --- Day 5: Linked List ---
      { title: 'Reverse Linked List', external_id: 'reverse-linked-list', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Middle of the Linked List', external_id: 'middle-of-the-linked-list', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Merge Two Sorted Lists', external_id: 'merge-two-sorted-lists', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Remove Nth Node From End of List', external_id: 'remove-nth-node-from-end-of-list', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Add Two Numbers', external_id: 'add-two-numbers', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Delete Node in a Linked List', external_id: 'delete-node-in-a-linked-list', difficulty: 'Easy', tags: ['Linked List'] },

      // --- Day 6: Linked List II ---
      { title: 'Intersection of Two Linked Lists', external_id: 'intersection-of-two-linked-lists', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Linked List Cycle', external_id: 'linked-list-cycle', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Reverse Nodes in k-Group', external_id: 'reverse-nodes-in-k-group', difficulty: 'Hard', tags: ['Linked List'] },
      { title: 'Palindrome Linked List', external_id: 'palindrome-linked-list', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Linked List Cycle II', external_id: 'linked-list-cycle-ii', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Flattening a Linked List', external_id: 'flatten-a-multilevel-doubly-linked-list', difficulty: 'Medium', tags: ['Linked List'] }, // Closest LeetCode equivalent

      // --- Day 7: Linked List and Arrays ---
      { title: 'Rotate List', external_id: 'rotate-list', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Copy List with Random Pointer', external_id: 'copy-list-with-random-pointer', difficulty: 'Medium', tags: ['Linked List'] },
      { title: '3Sum', external_id: '3sum', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: 'Trapping Rain Water', external_id: 'trapping-rain-water', difficulty: 'Hard', tags: ['Two Pointers', 'Stack'] },
      { title: 'Remove Duplicates from Sorted Array', external_id: 'remove-duplicates-from-sorted-array', difficulty: 'Easy', tags: ['Array'] },
      { title: 'Max Consecutive Ones', external_id: 'max-consecutive-ones', difficulty: 'Easy', tags: ['Array'] },

      // --- Day 8: Greedy ---
      { title: 'N Meetings in One Room', external_id: 'non-overlapping-intervals', difficulty: 'Medium', tags: ['Greedy'] }, // Mapped to Non-overlapping Intervals
      { title: 'Minimum Platforms', external_id: 'minimum-number-of-arrows-to-burst-balloons', difficulty: 'Medium', tags: ['Greedy'] }, // Similar logic
      { title: 'Coin Change', external_id: 'coin-change', difficulty: 'Medium', tags: ['Greedy', 'DP'] },
      { title: 'Fractional Knapsack', external_id: 'maximum-units-on-a-truck', difficulty: 'Easy', tags: ['Greedy'] }, // Closest LeetCode Variant

      // --- Day 9: Recursion ---
      { title: 'Subset Sums', external_id: 'subsets', difficulty: 'Medium', tags: ['Recursion'] }, // LeetCode 'Subsets' is similar
      { title: 'Subsets II', external_id: 'subsets-ii', difficulty: 'Medium', tags: ['Recursion'] },
      { title: 'Combination Sum', external_id: 'combination-sum', difficulty: 'Medium', tags: ['Recursion'] },
      { title: 'Combination Sum II', external_id: 'combination-sum-ii', difficulty: 'Medium', tags: ['Recursion'] },
      { title: 'Palindrome Partitioning', external_id: 'palindrome-partitioning', difficulty: 'Medium', tags: ['Recursion'] },
      { title: 'Permutation Sequence', external_id: 'permutation-sequence', difficulty: 'Hard', tags: ['Recursion', 'Math'] },

      // --- Day 10: Backtracking ---
      { title: 'Permutations', external_id: 'permutations', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'N-Queens', external_id: 'n-queens', difficulty: 'Hard', tags: ['Backtracking'] },
      { title: 'Sudoku Solver', external_id: 'sudoku-solver', difficulty: 'Hard', tags: ['Backtracking'] },
      { title: 'M-Coloring Problem', external_id: 'flower-planting-with-no-adjacent', difficulty: 'Medium', tags: ['Graph', 'Backtracking'] }, // LeetCode variant
      { title: 'Rat in a Maze', external_id: 'word-search', difficulty: 'Medium', tags: ['Backtracking'] }, // Similar grid traversal

      // --- Day 11: Binary Search ---
      { title: 'Nth Root of M', external_id: 'powx-n', difficulty: 'Medium', tags: ['Binary Search'] }, // Sqrt(x) or Pow(x,n)
      { title: 'Single Element in a Sorted Array', external_id: 'single-element-in-a-sorted-array', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Search in Rotated Sorted Array', external_id: 'search-in-rotated-sorted-array', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Median of Two Sorted Arrays', external_id: 'median-of-two-sorted-arrays', difficulty: 'Hard', tags: ['Binary Search'] },
      { title: 'Kth Element of Two Sorted Arrays', external_id: 'kth-largest-element-in-an-array', difficulty: 'Medium', tags: ['Binary Search', 'Heap'] }, // Similar concept
      { title: 'Allocate Books', external_id: 'capacity-to-ship-packages-within-d-days', difficulty: 'Medium', tags: ['Binary Search'] }, // Isomorphic problem

      // --- Day 12: Heaps ---
      { title: 'Kth Largest Element in an Array', external_id: 'kth-largest-element-in-an-array', difficulty: 'Medium', tags: ['Heap'] },
      { title: 'Top K Frequent Elements', external_id: 'top-k-frequent-elements', difficulty: 'Medium', tags: ['Heap'] },
      { title: 'Find Median from Data Stream', external_id: 'find-median-from-data-stream', difficulty: 'Hard', tags: ['Heap'] },
      { title: 'Merge k Sorted Lists', external_id: 'merge-k-sorted-lists', difficulty: 'Hard', tags: ['Heap'] },

      // --- Day 13: Stack and Queue ---
      { title: 'Valid Parentheses', external_id: 'valid-parentheses', difficulty: 'Easy', tags: ['Stack'] },
      { title: 'Next Greater Element I', external_id: 'next-greater-element-i', difficulty: 'Easy', tags: ['Stack'] },
      { title: 'Next Greater Element II', external_id: 'next-greater-element-ii', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Sort a Stack', external_id: 'min-stack', difficulty: 'Medium', tags: ['Stack'] }, // Min Stack is classic implementation

      // --- Day 14: Stack and Queue II ---
      { title: 'LRU Cache', external_id: 'lru-cache', difficulty: 'Medium', tags: ['Design', 'Stack'] },
      { title: 'LFU Cache', external_id: 'lfu-cache', difficulty: 'Hard', tags: ['Design'] },
      { title: 'Largest Rectangle in Histogram', external_id: 'largest-rectangle-in-histogram', difficulty: 'Hard', tags: ['Stack'] },
      { title: 'Sliding Window Maximum', external_id: 'sliding-window-maximum', difficulty: 'Hard', tags: ['Stack', 'Sliding Window'] },
      { title: 'Min Stack', external_id: 'min-stack', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Rotting Oranges', external_id: 'rotting-oranges', difficulty: 'Medium', tags: ['BFS'] },

      // --- Day 15: String ---
      { title: 'Reverse Words in a String', external_id: 'reverse-words-in-a-string', difficulty: 'Medium', tags: ['String'] },
      { title: 'Longest Palindromic Substring', external_id: 'longest-palindromic-substring', difficulty: 'Medium', tags: ['String', 'DP'] },
      { title: 'Roman to Integer', external_id: 'roman-to-integer', difficulty: 'Easy', tags: ['String'] },
      { title: 'String to Integer (atoi)', external_id: 'string-to-integer-atoi', difficulty: 'Medium', tags: ['String'] },
      { title: 'Longest Common Prefix', external_id: 'longest-common-prefix', difficulty: 'Easy', tags: ['String'] },

      // --- Day 16: String II ---
      { title: 'Implement strStr() (KMP)', external_id: 'implement-strstr', difficulty: 'Easy', tags: ['String'] },
      { title: 'Valid Anagram', external_id: 'valid-anagram', difficulty: 'Easy', tags: ['String'] },
      { title: 'Count and Say', external_id: 'count-and-say', difficulty: 'Medium', tags: ['String'] },
      { title: 'Compare Version Numbers', external_id: 'compare-version-numbers', difficulty: 'Medium', tags: ['String'] },

      // --- Day 17: Binary Tree ---
      { title: 'Binary Tree Inorder Traversal', external_id: 'binary-tree-inorder-traversal', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Binary Tree Preorder Traversal', external_id: 'binary-tree-preorder-traversal', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Binary Tree Postorder Traversal', external_id: 'binary-tree-postorder-traversal', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Binary Tree Vertical Order Traversal', external_id: 'vertical-order-traversal-of-a-binary-tree', difficulty: 'Hard', tags: ['Tree'] },
      { title: 'Maximum Width of Binary Tree', external_id: 'maximum-width-of-binary-tree', difficulty: 'Medium', tags: ['Tree'] },
      
      // --- Day 18: Binary Tree II ---
      { title: 'Binary Tree Level Order Traversal', external_id: 'binary-tree-level-order-traversal', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Maximum Depth of Binary Tree', external_id: 'maximum-depth-of-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Diameter of Binary Tree', external_id: 'diameter-of-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Balanced Binary Tree', external_id: 'balanced-binary-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Lowest Common Ancestor of a Binary Tree', external_id: 'lowest-common-ancestor-of-a-binary-tree', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Same Tree', external_id: 'same-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Binary Tree Zigzag Level Order Traversal', external_id: 'binary-tree-zigzag-level-order-traversal', difficulty: 'Medium', tags: ['Tree'] },
      
      // --- Day 19: Binary Tree III ---
      { title: 'Binary Tree Maximum Path Sum', external_id: 'binary-tree-maximum-path-sum', difficulty: 'Hard', tags: ['Tree'] },
      { title: 'Construct Binary Tree from Preorder and Inorder', external_id: 'construct-binary-tree-from-preorder-and-inorder-traversal', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Construct Binary Tree from Inorder and Postorder', external_id: 'construct-binary-tree-from-inorder-and-postorder-traversal', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Symmetric Tree', external_id: 'symmetric-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Flatten Binary Tree to Linked List', external_id: 'flatten-binary-tree-to-linked-list', difficulty: 'Medium', tags: ['Tree'] },
      
      // --- Day 20: Binary Search Tree ---
      { title: 'Search in a Binary Search Tree', external_id: 'search-in-a-binary-search-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Convert Sorted Array to Binary Search Tree', external_id: 'convert-sorted-array-to-binary-search-tree', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Construct Binary Search Tree from Preorder', external_id: 'construct-binary-search-tree-from-preorder-traversal', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Validate Binary Search Tree', external_id: 'validate-binary-search-tree', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Lowest Common Ancestor of a BST', external_id: 'lowest-common-ancestor-of-a-binary-search-tree', difficulty: 'Easy', tags: ['Tree'] },
      
      // --- Day 21: Binary Search Tree II ---
      { title: 'Floor and Ceil in BST', external_id: 'closest-binary-search-tree-value', difficulty: 'Easy', tags: ['Tree'] }, // Closest LeetCode equivalent
      { title: 'Kth Smallest Element in a BST', external_id: 'kth-smallest-element-in-a-bst', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Binary Search Tree Iterator', external_id: 'binary-search-tree-iterator', difficulty: 'Medium', tags: ['Tree'] },
      { title: 'Two Sum IV - Input is a BST', external_id: 'two-sum-iv-input-is-a-bst', difficulty: 'Easy', tags: ['Tree'] },
      { title: 'Serialize and Deserialize Binary Tree', external_id: 'serialize-and-deserialize-binary-tree', difficulty: 'Hard', tags: ['Tree'] },

      // --- Day 23: Graph ---
      { title: 'Clone Graph', external_id: 'clone-graph', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Course Schedule', external_id: 'course-schedule', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Course Schedule II', external_id: 'course-schedule-ii', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Number of Islands', external_id: 'number-of-islands', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Is Graph Bipartite?', external_id: 'is-graph-bipartite', difficulty: 'Medium', tags: ['Graph'] },

      // --- Day 24: Graph II ---
      { title: 'Critical Connections in a Network (Bridges)', external_id: 'critical-connections-in-a-network', difficulty: 'Hard', tags: ['Graph'] },
      { title: 'Network Delay Time (Dijkstra)', external_id: 'network-delay-time', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Cheapest Flights Within K Stops (Bellman)', external_id: 'cheapest-flights-within-k-stops', difficulty: 'Medium', tags: ['Graph'] },
      { title: 'Min Cost to Connect All Points (Prim/MST)', external_id: 'min-cost-to-connect-all-points', difficulty: 'Medium', tags: ['Graph'] },

      // --- Day 25: Dynamic Programming ---
      { title: 'Maximum Product Subarray', external_id: 'maximum-product-subarray', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Increasing Subsequence', external_id: 'longest-increasing-subsequence', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Common Subsequence', external_id: 'longest-common-subsequence', difficulty: 'Medium', tags: ['DP'] },
      { title: '0 - 1 Knapsack', external_id: 'partition-equal-subset-sum', difficulty: 'Medium', tags: ['DP'] }, // Closest Variant
      { title: 'Edit Distance', external_id: 'edit-distance', difficulty: 'Hard', tags: ['DP'] },
      { title: 'Burst Balloons (MCM)', external_id: 'burst-balloons', difficulty: 'Hard', tags: ['DP'] },
      
      // --- Day 26: DP II ---
      { title: 'Minimum Path Sum', external_id: 'minimum-path-sum', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Coin Change', external_id: 'coin-change', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Partition Equal Subset Sum', external_id: 'partition-equal-subset-sum', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Word Break', external_id: 'word-break', difficulty: 'Medium', tags: ['DP'] }
    ]
  },
  // --- 6. LEETCODE 75 (Official Study Plan) ---
  {
    id: 'leetcode75',
    title: 'LeetCode 75 (Official)',
    description: 'The official curated study plan by LeetCode. Features newer problems and excellent variety.',
    problems: [
      // --- Array / String ---
      { title: 'Merge Strings Alternately', external_id: 'merge-strings-alternately', difficulty: 'Easy', tags: ['Array', 'Two Pointers'] },
      { title: 'Greatest Common Divisor of Strings', external_id: 'greatest-common-divisor-of-strings', difficulty: 'Easy', tags: ['String', 'Math'] },
      { title: 'Kids With the Greatest Number of Candies', external_id: 'kids-with-the-greatest-number-of-candies', difficulty: 'Easy', tags: ['Array'] },
      { title: 'Can Place Flowers', external_id: 'can-place-flowers', difficulty: 'Easy', tags: ['Array', 'Greedy'] },
      { title: 'Reverse Vowels of a String', external_id: 'reverse-vowels-of-a-string', difficulty: 'Easy', tags: ['Two Pointers', 'String'] },
      { title: 'Reverse Words in a String', external_id: 'reverse-words-in-a-string', difficulty: 'Medium', tags: ['Two Pointers', 'String'] },
      { title: 'Product of Array Except Self', external_id: 'product-of-array-except-self', difficulty: 'Medium', tags: ['Array', 'Prefix Sum'] },
      { title: 'Increasing Triplet Subsequence', external_id: 'increasing-triplet-subsequence', difficulty: 'Medium', tags: ['Array', 'Greedy'] },
      { title: 'String Compression', external_id: 'string-compression', difficulty: 'Medium', tags: ['Two Pointers', 'String'] },

      // --- Two Pointers ---
      { title: 'Move Zeroes', external_id: 'move-zeroes', difficulty: 'Easy', tags: ['Two Pointers'] },
      { title: 'Is Subsequence', external_id: 'is-subsequence', difficulty: 'Easy', tags: ['Two Pointers'] },
      { title: 'Container With Most Water', external_id: 'container-with-most-water', difficulty: 'Medium', tags: ['Two Pointers'] },
      { title: 'Max Number of K-Sum Pairs', external_id: 'max-number-of-k-sum-pairs', difficulty: 'Medium', tags: ['Two Pointers', 'Hash Table'] },

      // --- Sliding Window ---
      { title: 'Maximum Average Subarray I', external_id: 'maximum-average-subarray-i', difficulty: 'Easy', tags: ['Sliding Window'] },
      { title: 'Maximum Number of Vowels in a Substring of Given Length', external_id: 'maximum-number-of-vowels-in-a-substring-of-given-length', difficulty: 'Medium', tags: ['Sliding Window'] },
      { title: 'Max Consecutive Ones III', external_id: 'max-consecutive-ones-iii', difficulty: 'Medium', tags: ['Sliding Window'] },
      { title: 'Longest Subarray of 1s After Deleting One Element', external_id: 'longest-subarray-of-1s-after-deleting-one-element', difficulty: 'Medium', tags: ['Sliding Window'] },

      // --- Prefix Sum ---
      { title: 'Find the Highest Altitude', external_id: 'find-the-highest-altitude', difficulty: 'Easy', tags: ['Prefix Sum'] },
      { title: 'Find Pivot Index', external_id: 'find-pivot-index', difficulty: 'Easy', tags: ['Prefix Sum'] },

      // --- Hash Map / Set ---
      { title: 'Find the Difference of Two Arrays', external_id: 'find-the-difference-of-two-arrays', difficulty: 'Easy', tags: ['Hash Table'] },
      { title: 'Unique Number of Occurrences', external_id: 'unique-number-of-occurrences', difficulty: 'Easy', tags: ['Hash Table'] },
      { title: 'Determine if Two Strings Are Close', external_id: 'determine-if-two-strings-are-close', difficulty: 'Medium', tags: ['Hash Table'] },
      { title: 'Equal Row and Column Pairs', external_id: 'equal-row-and-column-pairs', difficulty: 'Medium', tags: ['Hash Table'] },

      // --- Stack ---
      { title: 'Removing Stars From a String', external_id: 'removing-stars-from-a-string', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Asteroid Collision', external_id: 'asteroid-collision', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Decode String', external_id: 'decode-string', difficulty: 'Medium', tags: ['Stack'] },

      // --- Queue ---
      { title: 'Number of Recent Calls', external_id: 'number-of-recent-calls', difficulty: 'Easy', tags: ['Queue'] },
      { title: 'Dota2 Senate', external_id: 'dota2-senate', difficulty: 'Medium', tags: ['Queue', 'Greedy'] },

      // --- Linked List ---
      { title: 'Delete the Middle Node of a Linked List', external_id: 'delete-the-middle-node-of-a-linked-list', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Odd Even Linked List', external_id: 'odd-even-linked-list', difficulty: 'Medium', tags: ['Linked List'] },
      { title: 'Reverse Linked List', external_id: 'reverse-linked-list', difficulty: 'Easy', tags: ['Linked List'] },
      { title: 'Maximum Twin Sum of a Linked List', external_id: 'maximum-twin-sum-of-a-linked-list', difficulty: 'Medium', tags: ['Linked List'] },

      // --- Binary Tree - DFS ---
      { title: 'Maximum Depth of Binary Tree', external_id: 'maximum-depth-of-binary-tree', difficulty: 'Easy', tags: ['Tree', 'DFS'] },
      { title: 'Leaf-Similar Trees', external_id: 'leaf-similar-trees', difficulty: 'Easy', tags: ['Tree', 'DFS'] },
      { title: 'Count Good Nodes in Binary Tree', external_id: 'count-good-nodes-in-binary-tree', difficulty: 'Medium', tags: ['Tree', 'DFS'] },
      { title: 'Path Sum III', external_id: 'path-sum-iii', difficulty: 'Medium', tags: ['Tree', 'DFS'] },
      { title: 'Longest ZigZag Path in a Binary Tree', external_id: 'longest-zigzag-path-in-a-binary-tree', difficulty: 'Medium', tags: ['Tree', 'DFS'] },
      { title: 'Lowest Common Ancestor of a Binary Tree', external_id: 'lowest-common-ancestor-of-a-binary-tree', difficulty: 'Medium', tags: ['Tree', 'DFS'] },

      // --- Binary Tree - BFS ---
      { title: 'Binary Tree Right Side View', external_id: 'binary-tree-right-side-view', difficulty: 'Medium', tags: ['Tree', 'BFS'] },
      { title: 'Maximum Level Sum of a Binary Tree', external_id: 'maximum-level-sum-of-a-binary-tree', difficulty: 'Medium', tags: ['Tree', 'BFS'] },

      // --- Binary Search Tree ---
      { title: 'Search in a Binary Search Tree', external_id: 'search-in-a-binary-search-tree', difficulty: 'Easy', tags: ['Tree', 'BST'] },
      { title: 'Delete Node in a BST', external_id: 'delete-node-in-a-bst', difficulty: 'Medium', tags: ['Tree', 'BST'] },

      // --- Graphs - DFS ---
      { title: 'Keys and Rooms', external_id: 'keys-and-rooms', difficulty: 'Medium', tags: ['Graph', 'DFS'] },
      { title: 'Number of Provinces', external_id: 'number-of-provinces', difficulty: 'Medium', tags: ['Graph', 'DFS'] },
      { title: 'Reorder Routes to Make All Paths Lead to the City Zero', external_id: 'reorder-routes-to-make-all-paths-lead-to-the-city-zero', difficulty: 'Medium', tags: ['Graph', 'DFS'] },
      { title: 'Evaluate Division', external_id: 'evaluate-division', difficulty: 'Medium', tags: ['Graph', 'DFS'] },

      // --- Graphs - BFS ---
      { title: 'Nearest Exit from Entrance in Maze', external_id: 'nearest-exit-from-entrance-in-maze', difficulty: 'Medium', tags: ['Graph', 'BFS'] },
      { title: 'Rotting Oranges', external_id: 'rotting-oranges', difficulty: 'Medium', tags: ['Graph', 'BFS'] },

      // --- Heap / Priority Queue ---
      { title: 'Kth Largest Element in an Array', external_id: 'kth-largest-element-in-an-array', difficulty: 'Medium', tags: ['Heap'] },
      { title: 'Smallest Number in Infinite Set', external_id: 'smallest-number-in-infinite-set', difficulty: 'Medium', tags: ['Heap', 'Design'] },
      { title: 'Maximum Subsequence Score', external_id: 'maximum-subsequence-score', difficulty: 'Medium', tags: ['Heap', 'Greedy'] },
      { title: 'Total Cost to Hire K Workers', external_id: 'total-cost-to-hire-k-workers', difficulty: 'Medium', tags: ['Heap'] },

      // --- Binary Search ---
      { title: 'Guess Number Higher or Lower', external_id: 'guess-number-higher-or-lower', difficulty: 'Easy', tags: ['Binary Search'] },
      { title: 'Successful Pairs of Spells and Potions', external_id: 'successful-pairs-of-spells-and-potions', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Find Peak Element', external_id: 'find-peak-element', difficulty: 'Medium', tags: ['Binary Search'] },
      { title: 'Koko Eating Bananas', external_id: 'koko-eating-bananas', difficulty: 'Medium', tags: ['Binary Search'] },

      // --- Backtracking ---
      { title: 'Letter Combinations of a Phone Number', external_id: 'letter-combinations-of-a-phone-number', difficulty: 'Medium', tags: ['Backtracking'] },
      { title: 'Combination Sum III', external_id: 'combination-sum-iii', difficulty: 'Medium', tags: ['Backtracking'] },

      // --- DP - 1D ---
      { title: 'N-th Tribonacci Number', external_id: 'n-th-tribonacci-number', difficulty: 'Easy', tags: ['DP'] },
      { title: 'Min Cost Climbing Stairs', external_id: 'min-cost-climbing-stairs', difficulty: 'Easy', tags: ['DP'] },
      { title: 'House Robber', external_id: 'house-robber', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Domino and Tromino Tiling', external_id: 'domino-and-tromino-tiling', difficulty: 'Medium', tags: ['DP'] },

      // --- DP - Multidimensional ---
      { title: 'Unique Paths', external_id: 'unique-paths', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Longest Common Subsequence', external_id: 'longest-common-subsequence', difficulty: 'Medium', tags: ['DP'] },
      { title: 'Best Time to Buy and Sell Stock with Transaction Fee', external_id: 'best-time-to-buy-and-sell-stock-with-transaction-fee', difficulty: 'Medium', tags: ['DP', 'Greedy'] },
      { title: 'Edit Distance', external_id: 'edit-distance', difficulty: 'Medium', tags: ['DP'] },

      // --- Bit Manipulation ---
      { title: 'Counting Bits', external_id: 'counting-bits', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Single Number', external_id: 'single-number', difficulty: 'Easy', tags: ['Bit Manipulation'] },
      { title: 'Minimum Flips to Make a OR b Equal to c', external_id: 'minimum-flips-to-make-a-or-b-equal-to-c', difficulty: 'Medium', tags: ['Bit Manipulation'] },

      // --- Trie ---
      { title: 'Implement Trie (Prefix Tree)', external_id: 'implement-trie-prefix-tree', difficulty: 'Medium', tags: ['Trie'] },
      { title: 'Search Suggestions System', external_id: 'search-suggestions-system', difficulty: 'Medium', tags: ['Trie', 'Heap'] },

      // --- Intervals ---
      { title: 'Non-overlapping Intervals', external_id: 'non-overlapping-intervals', difficulty: 'Medium', tags: ['Intervals', 'Greedy'] },
      { title: 'Minimum Number of Arrows to Burst Balloons', external_id: 'minimum-number-of-arrows-to-burst-balloons', difficulty: 'Medium', tags: ['Intervals', 'Greedy'] },

      // --- Monotonic Stack ---
      { title: 'Daily Temperatures', external_id: 'daily-temperatures', difficulty: 'Medium', tags: ['Stack'] },
      { title: 'Online Stock Span', external_id: 'online-stock-span', difficulty: 'Medium', tags: ['Stack'] }
    ]
  }
];