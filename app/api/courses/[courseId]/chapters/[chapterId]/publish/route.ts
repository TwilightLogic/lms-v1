import { NextResponse } from 'next/server'

// TODO: Implement the publish route (6:12)
export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } },
) {
  try {
  } catch (error) {
    console.log('[COURSE_CHAPTER_ID]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
