import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = await prisma.user.upsert({
        where: { email: 'admin@evgenz.com' },
        update: {},
        create: {
            email: 'admin@evgenz.com',
            password: hashedPassword,
            name: 'Admin',
            role: 'ADMIN',
        },
    });
    console.log('Admin user seeded:', user.email);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
