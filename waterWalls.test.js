const findGreatestWaterWalls = require('./waterWalls.js')

test('returns a tuple of length 3', () => {
  let expected = findGreatestWaterWalls([5, 3, 3, 10]).length
  expect(expected).toBe(3);
});

test('finds the largest water walls', () => {
  let expected = findGreatestWaterWalls([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])
  expect(expected).toEqual([3,8,11]);
});

test('finds the largest water walls if walls are not in acsending height', () => {
  let expected = findGreatestWaterWalls([2, 1, 9, 5, 4, 6, 2, 7, 3, 5])
  expect(expected).toEqual([3,8,11]);
});