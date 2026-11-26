## ARRAY AND HASHING

 ### ARRAY
> array store ordered items by numeric index 
  . Array is dynamic , zerob-indexed collection that can hold mixed data types

* **Access by index**. Retrieving or updating an item at a known position takes O(1) constant time
  
* **End operations**. Adding (push) or removing (pop) from the end is fast at O(1) time

*  **Start/middle operations**. Inserting or deleting at the beginning (shift, unshift) or middle (splice) takes O(n) time because remaining elements must shift indices.

* **Searching**. Finding an unsorted value (includes, indexOf) requires scanning elements in O(n) time.


### HASHING 

> hasing uses a has function to convert a key into a numeric array index , allowing you to store and retrieve data without scanning the whole collection



 #### Built-in Hash Structures

For everyday coding, JavaScript provides three built-in hash-based structures:
*  **Map**. Best for key-value pairs. It accepts any data type as a key, preserves insertion order, tracks its .size, and avoids prototype key collisions.
* **Set**. Best for storing unique values and checking existence in O(1) time.
* **Plain Object ({})**. Good for simple string-keyed records or JSON data, though it lacks built-in size tracking and inherits prototype properties.
