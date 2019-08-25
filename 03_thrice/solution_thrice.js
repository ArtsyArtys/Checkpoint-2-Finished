let counter = 0;

function thrice(func)
{
  if (counter < 3)
  {
    counter++;
    return func;
  }
}

// OR no global vars
//
//
// function thrice(func)
// {
//   let counter = 0;
//   function inner(it = func)
//   {
//     if (counter < 3)
//     {
//       return it;
//     }
//   }
//   return inner();
// }


// I'm not sure why neither of these worked >:(, but I'm sure reviewing
// the closure lectures will give me an epiphany that should've been
// obvious
