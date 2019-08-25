function reject(arr, func)
{
  return arr.filter(obj => !func(obj));
}
