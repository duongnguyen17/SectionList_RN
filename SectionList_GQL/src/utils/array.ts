export function removeMember<T>(member: T, arr: Array<T>): Array<T> {
  const index = arr.indexOf(member);
  if (index > -1) {
    // only splice array when item is found
    arr.splice(index, 1); // 2nd parameter means remove one item only
  }
  return arr;
}
