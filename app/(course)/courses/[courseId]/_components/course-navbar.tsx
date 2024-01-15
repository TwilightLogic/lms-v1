import { NavbarRoutes } from '@/components/navbar-routes'
import { Course, UserProgress } from '@prisma/client'
import { CourseMobileSidebar } from './course-mobile-sidebar'

interface CourseNavbarProps {
  course: Course & { userProgress: UserProgress[] | null }[]
  progressCount: number
}

export const CourseNavbar = ({ course, progressCount }: CourseNavbarProps) => {
  return (
    <div className='p-6 border-b dark:border-slate-900 h-full flex items-center bg-white dark:bg-slate-950 shadow-sm'>
      <CourseMobileSidebar course={course} progressCount={progressCount} />
      <NavbarRoutes />
    </div>
  )
}
