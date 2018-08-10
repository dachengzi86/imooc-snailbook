const koa = require('koa')
const app = new koa()

// Onion model
// 135642
app.use(async (ctx, next) => {
  ctx.body = '1'
  // Next middleware
  next()
  ctx.body += '2'
})

app.use(async (ctx, next) => {
  ctx.body += '3'
  next()
  ctx.body += '4'
})

app.use(async (ctx, next) => {
  ctx.body += '5'
  next()
  ctx.body += '6'
})

app.listen(3000)
