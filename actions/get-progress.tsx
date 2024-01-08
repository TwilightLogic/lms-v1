import { db } from '@/lib/db'

// TODO: 7:36
export const getProgress = async (
  userId: string,
  courseId: string,
): Promise<Number> => {
  try {
    const publishedChapters = await db.chapter.findMany({
      where: { courseId, isPublished: true },
      select: { id: true },
    })

    const publishedChaptersIds = publishedChapters.map((chapter) => chapter.id)

    const validCompletedChapters = await db.userProgress.count({
      where: {
        userId: userId,
        chapterId: { in: publishedChaptersIds },
        isCompleted: true,
      },
    })

    const progressPercentage =
      (validCompletedChapters / publishedChapters.length) * 100

    return progressPercentage
  } catch (error) {
    console.log('[GET_PROGRESS]', error)

    return 0
  }
}
