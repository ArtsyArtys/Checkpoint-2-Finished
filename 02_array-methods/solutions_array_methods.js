function useMapToUpperCase(str)
{
  return str.split(" ").map(word => word.toUpperCase());
}

function useFilter(emailAttempt)
{
  return emailAttempt.filter(email => email.includes("@"));
}

function sumWithReduce(arr, startingVal = 0)
{
  return arr.reduce((acc, curr) => (acc + curr), startingVal);
}

function filterEvensDoubleAndSum(arr)
{
  return arr.filter(i => i % 2 === 0).map(i => i * 2).reduce((acc, curr) => acc + curr);
}
