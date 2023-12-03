const { PrismaClient } = require('@prisma/client')

const database = new PrismaClient()

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: 'Computer Science' },
                { name: 'Music' },
                { name: 'Fitness' },
                { name: 'Photography' },
                { name: 'Accounting' },
                { name: 'Engineering' },
                { name: 'Filming' },
            ],
        })
        console.log('Database seeded')
    } catch (error) {
        console.log('Error seeding database categories')
    } finally {
        await database.$disconnect()
    }
}

// Run the main()
main()
