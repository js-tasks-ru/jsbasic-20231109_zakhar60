function filterRange(arr, a, b) {
  let res = arr
    .filter(elem => elem<=b && elem >= a )
  return res
}
