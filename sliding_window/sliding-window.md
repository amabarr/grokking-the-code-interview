#Grokking the Interview Sliding Window Problems

Use cases:
- finding max/min subarrays/continguous subarrays//substrings

General pattern:

Finding max/min
- Declare a window start
- use a hash table, or set to keep track of the things inside the window
- if you find something you're not supposed to:
  - delete from the hash table/set. Recalculate your max/min, increase the windowStart Idx.
- return max/min at the end.
