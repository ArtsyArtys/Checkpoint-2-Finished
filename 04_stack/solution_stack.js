class Stack
{
  constructor()
  {
    this.store = [];
  }
  getStack()
  {
    return this.store;
  }
  add(thing)
  {
    this.store.push(thing);
    return this;
  }
  remove(thing = this.store.length - 1)
  {
    return this.store.splice(thing, 1)[0];
  }
}
