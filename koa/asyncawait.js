function delay(word) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(word)
    }, 2000)
  })
}

delay('sun')
  .then(word => {
    console.log(word)
    return delay('moon')
  })
  .then(word => {
    console.log(word)
    return delay('bug')
  })
  .then(word => {
    console.log(word)
  })

async function start() {
  const word1 = await delay('1')
  console.log(word1)
  const word2 = await delay('2')
  console.log(word2)
  const word3 = await delay('3')
  console.log(word3)
}
start()

// function compose(middlewares) {
//   return function() {
//     return dispatch(0)
//     function dispatch(i) {
//       let fn = middlewares[i]
//       if (!fn) {
//         return Promise.resolve()
//       }
//       return Promise.resolve(
//         fn(function next() {
//           return dispatch(i + 1)
//         })
//       )
//     }
//   }
// }

// const middlewares = [fn1, fn2, fn3]
// const finalFn = compose(middlewares)
// finalFn()
