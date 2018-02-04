# Water-Walls
Given an array of integers representing walls, calculate the amount of water that would be trapped between the walls and which two walls would contain the most amount of water. 

### Inputs
Given the heights: 5, 3, 7, 2, 6, 4, 5, 9, 1, 2

Input: Array -> [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]

### Outputs
Given the above input we would output that between wall 3 and 8 we would find the most of amount of water. The amount of water
trapped would be of size 11. 

Output: Tuple -> [3, 8, 11]

### Strategy
Iterate over the array keeping track of a starting value. As you traverse the array keep track of every subsquent values that are lower than start. Stop when you hit a value that is greater than start or if the current index is greater than both previous and next values. Subtract from whichever is lower(start or end), each value that you have tracked. This is the amount of water trapped. Repeat the process starting at the current index. If at any point you hit a value greater than the previous ending value, recalculate the previous summation based on previous tracked values + new tracked values using this new value as your new end. 

### Big-O
Since we will travering the entire array once, the time complexity will be of O(n). 

### Transformation Steps

[5, 3, 7, 2, 6, 4, 5, 9, 1, 2]

current | start | isLower | end | tracked values | notes | walls/water
-------- | ----- | ------- | --- | -------------- | ----- | -----
5 | 5 | - | - | - | - | -
3 | 5 | true | - | [3] | - | -
7 | 5 | false | 7 | [3] | (5 < 7) -> sum of 5 minus every tracked value | [0, 2, 2]
7 | 7 | - | - | - | - | -
2 | 7 | true | - | [2] | - | -
6 | 7 | true | - | [2,6] | - | -
4 | 7 | true | - | [2,6,4] | - | -
5 | 7 | true | - | [2,6,4,5] | - | -
9 | 7 | false | 9 | [2,6,4,5] | (7 < 9) -> sum of 7 minus every tracked value | [3, 8, 11]
9 | 9 | - | - | - | - | - 
1 | 9 | true | - | [1] | - | -
2 | 9 | true | 2(end of array) | [1] | (2 < 9) sum of 2 minus every tracked value | [8, 10, 1]

Walls with greatest water between: 3 and 8 with size 11.

### Function & Pseudocode
```

const findGreatestWaterWalls = elevationMap => {
  let start, end, tracked, previousTracked, calculated, waterWalls;
  //iterate over the elevationMap array
    // if at start of array or calculated is true
      // set start equal to current value
    // if current is greater than start and tracked length is greater than 1 
      //store sum of the subtraction of each tracked value from the lower of start and end
      //set calculated to true
      //set previous tracked equal tracked 
      //clear tracked
    // if current is less than start
      //push current to tracked
  //sort waterWalls array by largest water size
  //return the largest water walls
}
```

