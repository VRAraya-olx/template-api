const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const role1 = await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'admin'
    }
  })

  const role2 = await prisma.role.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'executive'
    }
  })

  const permission1 = await prisma.permission.upsert({
    where: { id: 1 },
    update: {},
    create: {
      action: 'read',
      subject: 'Auth'
    }
  })

  const permission2 = await prisma.permission.upsert({
    where: { id: 2 },
    update: {},
    create: {
      action: 'read',
      subject: 'Admin'
    }
  })

  const permission3 = await prisma.permission.upsert({
    where: { id: 3 },
    update: {},
    create: {
      action: 'read',
      subject: 'Executive'
    }
  })

  const permission_on_role1 = await prisma.permission_on_roles.upsert({
    where: {
      role_id_permission_id: {
        role_id: 1,
        permission_id: 1
      }
    },
    update: {},
    create: {
      role_id: 1,
      permission_id: 1,
    }
  })

  const permission_on_role2 = await prisma.permission_on_roles.upsert({
    where: {
      role_id_permission_id: {
        role_id: 1,
        permission_id: 2
      }
    },
    update: {},
    create: {
      role_id: 1,
      permission_id: 2,
    }
  })

  const permission_on_role3 = await prisma.permission_on_roles.upsert({
    where: {
      role_id_permission_id: {
        role_id: 1,
        permission_id: 3
      }
    },
    update: {},
    create: {
      role_id: 1,
      permission_id: 3,
    }
  })

  const permission_on_role4 = await prisma.permission_on_roles.upsert({
    where: {
      role_id_permission_id: {
        role_id: 2,
        permission_id: 1
      }
    },
    update: {},
    create: {
      role_id: 2,
      permission_id: 1,
    }
  })

  const permission_on_role5 = await prisma.permission_on_roles.upsert({
    where: {
      role_id_permission_id: {
        role_id: 2,
        permission_id: 3
      }
    },
    update: {},
    create: {
      role_id: 2,
      permission_id: 3,
    }
  })

  const first_user = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      firstname: 'Victor Eduardo',
      lastname: 'Araya Romero',
      created_at: new Date(),
      updated_at: new Date()
    }
  })

  const first_auth_user = await prisma.auth_user.upsert({
    where: { email: 'victor@olxautos.com' },
    update: {},
    create: {
      user_id: 1,
      email: 'victor.araya@olxautos.com',
      password: '$2b$10$6tRrtNdImHSVuX2pG8sm/uLTh9TxsrsBNpR9fUlcc1oNsNQ9UaYLS',
      role_id: 1,
      first_logged_in: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })