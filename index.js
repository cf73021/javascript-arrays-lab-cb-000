var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
  return kittens
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(kitten) {
  new_array = kittens.concat(kitten)
  return new_array
}
