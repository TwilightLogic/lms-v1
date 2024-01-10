import { Category, Course } from '@prisma/client'

type CourseWithProgressWithCategory = Course & {
  category: Category | null
  chapters: string[]
  progress: number | null
}

interface CoursesListProps {
  items: CourseWithProgressWithCategory[]
}

export const CoursesList = ({ items }: CoursesListProps) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}
