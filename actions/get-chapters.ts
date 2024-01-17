import { db } from '@/lib/db'
import { error } from 'console'

interface GetChaptersProps {
  userId: string
  courseId: string
  chapterId: string
}

export const getChapter = async ({
  userId,
  courseId,
  chapterId,
}: GetChaptersProps) => {
  try {
    // note:
    // - you are going to figure out
    // - what are the `purchase`, `course`, `chapter` below

    const purchase = db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    })

    const course = db.course.findUnique({
      where: {
        isPublished: true,
        id: courseId,
      },
      select: {
        price: true,
      },
    })

    const chapter = db.chapter.findUnique({
      where: {
        id: chapterId,
        isPublished: true,
      },
    })

    console.log('[GET_CHAPTER]', { purchase, course, chapter })

    if (!chapter || !course) {
      throw error('Chapter or course not found')
    }

    // TODO: 8:41:24
  } catch (error) {
    console.log('[GET_CHAPTER]', error)

    return {
      chapter: null,
      course: null,
      muxData: null,
      attachments: [],
      nextChapter: null,
      userProgress: null,
      purchase: null,
    }
  }
}
