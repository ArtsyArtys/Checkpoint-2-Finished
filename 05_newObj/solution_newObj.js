function newObj(obj)
{
  return Object.create(obj);
}

// I need to review this. The object returned should have the makeSound
// method on it in it's prototype chain, but it obviously doesn't
// and I don't recall offhand the way to enforce this behavior.
// I'm missing something related to the construction of the LittleMouse/obj
// A pair of fresh eyes would certainly help. As would being able to
// look at any material we've gone through. I'd be happy to redo this
// checkpoint after a review of the lectures. I'm sure it's a concept
// that I am just not recollecting.
