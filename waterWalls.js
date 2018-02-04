const findGreatestWaterWalls = elevationMap => {
  let start, prevStart, end, tracked = [], previousTracked = [], calculated = false, waterWalls = []
  
  const makeWaterWall = (i, addPreviousFlag) => {
    end = i 
    if (addPreviousFlag) {
      
      start = prevStart
      tracked = tracked.concat(previousTracked)
      
    }
    lower = elevationMap[start] < elevationMap[end] ? elevationMap[start] : elevationMap[end]

    let water = tracked.reduce((acc, val) => acc += lower - val, 0)

    waterWalls.push([start + 1, end + 1, water])
    calculated = true
    previousTracked = [...tracked]
    prevStart = start
    tracked = []
  }

  for (let i = 0; i < elevationMap.length; i++) {
    let current = elevationMap[i]

    if (calculated || i === 0) {

      start = i
      calculated = false;

    } else if ((current >= elevationMap[start] || !elevationMap[i + 1]) && tracked.length > 0 ) {
      
      let addPreviousFlag = elevationMap[prevStart] > current 
      makeWaterWall(i--, addPreviousFlag)

    } else if (current < elevationMap[start]) {
      tracked.push(current)

    }
  }

  return waterWalls.sort((a, b) => b[2] - a[2])[0]
}

module.exports = findGreatestWaterWalls;

