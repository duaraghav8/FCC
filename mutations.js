/*
  https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Mutations
  Time complexity: O (N.log(N))
*/

function mutation (array) {
  return array [0].toLowerCase ().split ('').sort ().join () === array [1].toLowerCase ().split ('').sort ().join ();
}
