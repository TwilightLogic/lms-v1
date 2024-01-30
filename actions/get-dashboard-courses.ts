import { db } from '@/lib/db'
import { Category, Chapter, Course } from '@prisma/client'
import { getProgress } from '@/actions/get-progress'

type CourseWithProgressWithCategory = Course & {
  category: Category
  chapters: Chapter[]
  progress: number | null
}

type DashboardCourses = {
  completedCourses: CourseWithProgressWithCategory[]
  coursesInProgress: CourseWithProgressWithCategory[]
}

// 1. 数据库操作做了什么？
// 2. 下面的 for 循环是什么意思？
// 3. 下面的 coursesInProgress 语句怎么理解？

export const getDashboardCourses = async (
  userId: string,
): Promise<DashboardCourses> => {
  try {
    // 根据 userId 查询 purchase 表，获取所有已发布并且有 category 的购买记录(CourseWithProgressWithCategory[])
    const purchasedCourses = await db.purchase.findMany({
      where: {
        userId: userId,
      },
      select: {
        course: {
          include: {
            category: true,
            chapters: {
              where: {
                isPublished: true,
              },
            },
          },
        },
      },
    })

    // 提取所有购买记录下的 courses
    const courses = purchasedCourses.map(
      (purchase) => purchase.course,
    ) as CourseWithProgressWithCategory[]

    for (let course of courses) {
      const progress = await getProgress(userId, course.id)
      course['progress'] = progress
    }

    const completedCourses = courses.filter((course) => course.progress === 100)
    // Nullish Coalescing Operator (??)
    // If the `course.progress` is null or undefined, then use 0 instead
    const coursesInProgress = courses.filter(
      (course) => (course.progress ?? 0) < 100,
    )

    return {
      completedCourses,
      coursesInProgress,
    }
  } catch (error) {
    console.log('[GET_DASHBOARD_COURSES]', error)
    return {
      completedCourses: [],
      coursesInProgress: [],
    }
  }
}
