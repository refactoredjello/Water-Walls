const findGreatestWaterWalls = elevationMap => {
  let start, end, tracked = [], previousTracked = [], calculated = false, waterWalls = []

  for (let i = 0; i < elevationMap.length; i++) {
 
    if (calculated || i === 0) {

      start = i
      calculated = false;

    } else if (elevationMap[i] >= elevationMap[start] && tracked.length > 0) {

      end = i 
      lower = elevationMap[start] < elevationMap[end] ? elevationMap[start] : elevationMap[end]

      let water = tracked.reduce((acc, val) => {
        return acc += lower - val
      }, 0)
  
      waterWalls.push([start + 1, end + 1, water])
      
      calculated = true
      previousTracked = [...tracked]
      tracked = []
      i--

    } else if (elevationMap[i] < elevationMap[start]) {
      tracked.push(elevationMap[i])

    }
  }

  return waterWalls.sort((a, b) => b[2] - a[2])[0]
}

module.exports = findGreatestWaterWalls;

