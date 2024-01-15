import { Menu } from 'lucide-react'
import { Chapter, Course, UserProgress } from '@prisma/client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { CourseSidebar } from './course-sidebar'

interface CourseMobileSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null
    })[]
  }
  progressCount: number
}

export const CourseMobileSidebar = ({
  course,
  progressCount,
}: CourseMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4 '>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <CourseSidebar course={course} progressCount={progressCount} />
      </SheetContent>
    </Sheet>
  )
}
