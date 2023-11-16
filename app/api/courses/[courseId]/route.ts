import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function PATCH(
    req: Request,
    { params }: { params: { courseId: string } },
) {
    try {
        const { userId } = auth()
        const { courseId } = params
        const values = await req.json()

        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

        const course = await db.course.update({
            where: { id: courseId, userId: userId },
            data: { ...values },
        })

        console.log('values', values)
        console.log('course', course)

        return NextResponse.json(course)
    } catch (error) {
        console.log('[COURSE_ID]', error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}
