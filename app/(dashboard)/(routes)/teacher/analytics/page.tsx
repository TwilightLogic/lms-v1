import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { getAnalytics } from '@/actions/get-analytics'

// TODO: 10:15
const AnalyticsPage = async () => {
  const { userId } = auth()

  if (!userId) {
    redirect('/')
  }

  const { data, totalRevenue, totalSales } = await getAnalytics(userId)

  return (
    <div>
      <h1>Analytics Page</h1>
    </div>
  )
}

export default AnalyticsPage
