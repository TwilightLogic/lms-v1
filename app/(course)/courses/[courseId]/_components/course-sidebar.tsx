import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { Chapter, Course, UserProgress } from '@prisma/client'
import { redirect } from 'next/navigation'

interface CourseSidebarProps {
  course: Course & { chapters: (Chapter & UserProgress)[] | null }
  progressCount: number
}

export const CourseSidebar = async ({
  course,
  progressCount,
}: CourseSidebarProps) => {
  const { userId } = auth()

  if (!userId) {
    return redirect('/')
  }

  const purchase = db.purchase.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId: course.id,
      },
    },
  })

  return (
    <div className='h-full border-r flex flex-col overflow-y-auto shadow-sm'>
      <div className='p-8 flex flex-col border-b'>
        <h1 className='font-semibold '>{course.title}</h1>
      </div>
      {/* TODO: Check purchase and add progress */}
      {/* TODO: 8:13 */}
    </div>
  )
}
