const { PrismaClient } = require('@prisma/client')
// Docs about instantiating `PrismaClient` with Next.js:
// https://pris.ly/d/help/next-js-best-practices

let prisma
async function sofDeleteMiddleware () {
  /***********************************/
  /* SOFT DELETE MIDDLEWARE */
  /***********************************/

  // prisma.$use(async (params, next) => {
  //   // Check incoming query type
  //   if (
  //     params.model == 'user'
  //   ) {
  //     if (params.action == 'delete') {
  //       // Delete queries
  //       // Change action to an update
  //       params.action = 'update'
  //       params.args.data = { deleted_at: new Date() }
  //     }
  //     if (params.action == 'deleteMany') {
  //       // Delete many queries
  //       params.action = 'updateMany'
  //       if (params.args.data != undefined) {
  //         params.args.data.deleted_at = new Date()
  //       } else {
  //         params.args.data = { deleted_at: new Date() }
  //       }
  //     }
  //   }
  //   return next(params)
  // })
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({ log: [] })
    // global.prisma = new PrismaClient({ log: ['info'] })
    // global.prisma = new PrismaClient({ log: ['query', 'info'] })
  }
  prisma = global.prisma
}

sofDeleteMiddleware()
module.exports = prisma
