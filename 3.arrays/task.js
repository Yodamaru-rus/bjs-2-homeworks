function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((element, index) => element === arr2[index])
  );
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users
    .filter((user) => user.gender === gender)
    .map((user) => user.age);
  return result.length == 0
    ? 0
    : result.reduce((acc, item) => acc + item, 0) / result.length;
}
